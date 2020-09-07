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

  test('upperFirst()', () => {
    expect(upperFirst('daniel')).toBe('Daniel');
    expect(upperFirst('daniel driskill')).toBe('Daniel Driskill');
    expect(upperFirst('daniel k. driskill')).toBe('Daniel K. Driskill');
  });

  test('filterBooks()', () => {
    const books = [{
      title: 'The Prince',
      author: 'Niccolo Machiavelli',
    },
    {
      title: 'Republic',
      author: 'Plato',
    },
    {
      title: 'Oddyssey',
      author: 'Homer',
    }];

    expect(filterBooks('', books)).toStrictEqual(books);
    expect(filterBooks('p', books)).toStrictEqual([{
      title: 'The Prince',
      author: 'Niccolo Machiavelli',
    },
    {
      title: 'Republic',
      author: 'Plato',
    }]);
    expect(filterBooks('pr', books)).toStrictEqual([{
      title: 'The Prince',
      author: 'Niccolo Machiavelli',
    }]);
    expect(filterBooks('', books)).toStrictEqual(books);
  });
});