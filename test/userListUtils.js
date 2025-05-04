import { expect } from 'chai';
import { filterUsersByAge, sortUsersByName, findUserById, isEmailTaken } from '../utils/usersListUtils.js';

describe('User List Utils', () => {
  const users = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
  ];

  describe('filterUsersByAge', () => {
    it('should filter users by age range', () => {
      expect(filterUsersByAge(users, 20, 30)).to.deep.equal([
        { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
        { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
      ]);
    });

    it('should return an empty array if no users match the age range', () => {
      expect(filterUsersByAge(users, 40, 50)).to.deep.equal([]);
    });

    it('should handle minAge greater than maxAge', () => {
      expect(filterUsersByAge(users, 36, 30)).to.deep.equal([]);
    });

    it('should throw an error if users is not an array', () => {
      expect(() => filterUsersByAge(null, 20, 30)).to.throw('Users must be an array');
    });
  });

  describe('sortUsersByName', () => {
    it('should sort users alphabetically by name', () => {
      expect(sortUsersByName(users)).to.deep.equal([
        { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
        { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
        { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
      ]);
    });

    it('should handle an empty array for sorting', () => {
      expect(sortUsersByName([])).to.deep.equal([]);
    });

    it('should throw an error if users is not an array', () => {
      expect(() => sortUsersByName('invalid')).to.throw('Users must be an array');
    });
  });

  describe('findUserById', () => {
    it('should return the user if the ID exists', () => {
      expect(findUserById(users, 2)).to.deep.equal({ id: 2, name: 'Bob', age: 30, email: 'bob@example.com' });
    });

    it('should return null if user with given ID does not exist', () => {
      expect(findUserById(users, 99)).to.equal(null);
    });

    it('should return null if ID is undefined', () => {
      expect(findUserById(users, undefined)).to.equal(null);
    });

    it('should return null if ID is null', () => {
      expect(findUserById(users, null)).to.equal(null);
    });

    it('should throw an error if users is not an array', () => {
      expect(() => findUserById(null, 1)).to.throw('Users must be an array');
    });
  });

  describe('isEmailTaken', () => {
    it('should return true if email exists in the users list', () => {
      expect(isEmailTaken(users, 'alice@example.com')).to.be.true;
    });

    it('should return false if email does not exist in the users list', () => {
      expect(isEmailTaken(users, 'unknown@example.com')).to.be.false;
    });

    it('should return false for emails with trailing spaces', () => {
      expect(isEmailTaken(users, 'alice@example.com ')).to.be.false;
    });

    it('should return false for emails in uppercase', () => {
      expect(isEmailTaken(users, 'ALICE@EXAMPLE.COM')).to.be.false;
    });

    it('should throw an error if users is not an array', () => {
      expect(() => isEmailTaken(null, 'test@example.com')).to.throw('Users must be an array');
    });
  });
});
