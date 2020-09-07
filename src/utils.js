import { capitalize } from 'lodash';

// Check string inputs for URLs
export const checkForUrls = str => (/(?:(?:https?|ftp):\/\/|www[.])[\n\S]+/gi.test(str));

// Capitalize first letters
export const upperFirst = str => str.replace(/\w+/g, capitalize);

// Filter out books title/author properties against a search term
export const filterBooks = (term, books) => books.filter((book) => {
  const title = book.title.toLowerCase();
  const author = book.author.toLowerCase();
  return (
    title.includes(term) || author.includes(term)
  );
});