import { capitalize } from 'lodash';

// Check string inputs for URLs
export const checkForUrls = str => (/(?:(?:https?|ftp):\/\/|www[.])[\n\S]+/gi.test(str));

// Capitalize first letters
export const upperFirst = str => str.replace(/\w+/g, capitalize);
