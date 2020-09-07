import { db } from '../config';

export const getBooks = async () => {
  let books = [];
  try {
    const data = await db.collection('books').get();
    data.forEach(doc => books.push({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (e) {
    console.error('Error getting documents: ', e);
  }
  return books;
};

export const saveBook = async (book) => {
  try {
    const docRef = await db.collection('books').add(book);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const updateBook = async ({
  id,
  title,
  author,
  pages,
  available,
  overdue
}) => {
  const docId = id;
  const doc = { title, author, pages, available, overdue };
  try {
    await db.collection('books').doc(docId).update(doc);
    return true;
  } catch (e) {
    console.error('Error updating document: ', e);
    return false;
  }
};

export const deleteBook = async (id) => {
  try {
    await db.collection('books').doc(id).delete();
    return true;
  } catch (e) {
    console.error('Error deleting document: ', e);
    return false;
  }
};
