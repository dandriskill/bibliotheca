import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { replace } from 'lodash';

import { checkForUrls, upperFirst } from '../utils';
import '../styles/AddEditBook.css';

const bookSchema = Yup.object().shape({
  title: Yup
    .string()
    .max(70, 'Too long!')
    .typeError('Only normal characters allowed')
    .required('Required'),
  author: Yup
    .string()
    .min(2, 'Too short!')
    .max(70, 'Too long!')
    .typeError('Only normal characters allowed')
    .required('Required'),
  pages: Yup
    .number()
    .positive('Must be a positive number')
    .integer('Must be a whole number')
    .typeError('Must be a number')
    .required('Required'),
  available: Yup
    .boolean()
    .required(),
  overdue: Yup
    .boolean()
    .required(),
});

const formatInput = ({
  title,
  author,
  pages,
  available,
  overdue,
}) => ({
  title: replace(upperFirst(title).trim(), /"/g, "'"),
  author: replace(upperFirst(author).trim(), /"/g, "'"),
  pages: pages ? parseInt(pages) : '',
  available: available || false,
  overdue: overdue || false,
});

function AddEditBook({
  bookId,
  bookTitle,
  bookAuthor,
  bookPages,
  bookAvailable,
  bookOverdue,
  updateBook,
  saveBook,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    title: bookTitle ? bookTitle : '',
    author: bookAuthor ? bookAuthor : '',
    pages: bookPages ? bookPages : '',
    available: bookAvailable || false,
    overdue: bookOverdue || false,
  };

  return (
    <div className='AddEditBook'>
      <Formik
        initialValues={initialValues}
        validationSchema={bookSchema}
        validate={values => {
          let errors = {};
          if (checkForUrls(values.title)) {
            errors.title = 'No URLs';
          }
          if (checkForUrls(values.author)) {
            errors.author = 'No URLs';
          }
          if (checkForUrls(values.pages)) {
            errors.pages = 'No URLs';
          }
          if (!values.pages) {
            errors.pages = 'Needs number of pages';
          }
          return errors;
        }}
        onSubmit={(values) => {
          setIsSubmitting(true);
          if (bookTitle || bookAuthor || bookPages) {
            const updateValues = {
              ...formatInput(values),
              id: bookId,
            };
            updateBook(updateValues);
          } else {
            saveBook(formatInput(values));
          }
        }}
      >
        <Form autoComplete='off'>
          <div className='form-fields'>
            <div className='form-field'>
              <div className='form-field-inner'>
                <span className='form-field-label'>
                  Book Title
                </span>
                <Field type='text' name='title' />
              </div>
              <ErrorMessage name='title' component='div' className='error-message' />
            </div>
            <div className='form-field'>
              <div className='form-field-inner'>
                <span className='form-field-label'>
                  Author
                </span>
                <Field type='text' name='author' />
              </div>
              <ErrorMessage name='author' component='div' className='error-message' />
            </div>
            <div className='form-field'>
              <div className='form-field-inner'>
                <span className='form-field-label'>
                  Pages
                </span>
                <Field type='text' name='pages' />
              </div>
              <ErrorMessage name='pages' component='div' className='error-message' />
            </div>
            <div className="checkbox-field">
              <div className='form-field-inner'>
                <span className='checkbox-field-label'>
                  Available
                </span>
                <Field type="checkbox" name="available" className="checkbox" />
              </div>
              <ErrorMessage name='available' component='div' className='error-message' />
            </div>
            <div className="checkbox-field">
              <div className='form-field-inner'>
                <span className='checkbox-field-label'>
                  Overdue
                </span>
                <Field type="checkbox" name="overdue" className="checkbox" />
              </div>
              <ErrorMessage name='overdue' component='div' className='error-message' />
            </div>
          </div>
          <button type='submit' disabled={isSubmitting} className='modal-button'>
            Save
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddEditBook;