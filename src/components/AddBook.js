import React, { useState } from 'react';
import { checkForUrls, upperFirst } from '../utils/strings';
import '../styles/AddBook.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { replace } from 'lodash';

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
    .typeError('Must be a number'),
});

const formatInput = ({
  title,
  author,
  pages,
}) => ({
  title: replace(upperFirst(title).trim(), /"/g, "'"),
  author: replace(upperFirst(author).trim(), /"/g, "'"),
  pages: pages ? parseInt(pages) : '',
});

function AddBook({
  saveBook,
  closeModal,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    title: '',
    author: '',
    pages: '',
  };

  return (
    <div className='AddBook'>
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
            errors.pages = 'Needs a page number';
          }
          return errors;
        }}
        onSubmit={(values) => {
          setIsSubmitting(true);
          saveBook(formatInput(values));
          alert('Your book has been added!'); // TODO: Have this show up as an "error" message on the modal instead?
          closeModal();
        }}
      >
        <Form autoComplete="off">
          <div className="form-fields">
            <div className="form-field">
              <div className="form-field-inner">
                <span className="form-field-label">
                  Book Title
                </span>
                <Field type="text" name="title" />
              </div>
              <ErrorMessage name="title" component="div" className="error-message" />
            </div>
            <div className="form-field">
              <div className="form-field-inner">
                <span className="form-field-label">
                  Author
                </span>
                <Field type="text" name="author" />
              </div>
              <ErrorMessage name="author" component="div" className="error-message" />
            </div>
            <div className="form-field">
              <div className="form-field-inner">
                <span className="form-field-label">
                  Pages
                </span>
                <Field type="text" name="pages" />
              </div>
              <ErrorMessage name="pages" component="div" className="error-message" />
            </div>
          </div>
          <button type="submit" disabled={isSubmitting} className="button btn-ghost btn-ghost-bold">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddBook;