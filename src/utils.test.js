import {
  checkForUrls,
  upperFirst,
  filterBooks,
} from './utils';

describe('utils', () => {
  test('checkForUrls()', () => {
    expect(checkForUrls('http://facebook.com')).toBe(true);
    expect(checkForUrls('https://reactjs.org')).toBe(true);
    expect(checkForUrls('https://www.npmjs.com')).toBe(true);
    expect(checkForUrls('J.R.R.')).toBe(false);
  });

  xtest('upperFirst()', () => {
    
  });

  xtest('filterBooks()', () => {
    
  });
});