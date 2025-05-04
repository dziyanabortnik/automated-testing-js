import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../utils/stringUtils.js';

describe('String Utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of the string', () => {
      expect(capitalize('hello')).to.equal('Hello');
    });

    it('should return an empty string if input is an empty string', () => {
      expect(capitalize('')).to.equal('');
    });

    it('should handle strings with spaces and capitalize only the first letter', () => {
      const trimmedInput = ' hello'.trim();
      expect(capitalize(trimmedInput)).to.equal('Hello');
    });

    it('should throw an error if input is not a string', () => {
      expect(() => capitalize(123)).to.throw('Input must be a string');
      expect(() => capitalize(null)).to.throw('Input must be a string');
    });
  });

  describe('reverseString', () => {
    it('should reverse the string', () => {
      expect(reverseString('hello')).to.equal('olleh');
    });

    it('should correctly reverse a string with spaces', () => {
      expect(reverseString('hello world')).to.equal('dlrow olleh');
    });

    it('should throw an error if input is not a string', () => {
      expect(() => reverseString([])).to.throw('Input must be a string');
      expect(() => reverseString(undefined)).to.throw('Input must be a string');
    });
  });

  describe('isPalindrome', () => {
    it('should correctly identify a palindrome', () => {
      expect(isPalindrome('madam')).to.be.true;
    });

    it('should correctly identify non-palindromes', () => {
      expect(isPalindrome('hello')).to.be.false;
    });

    it('should handle special characters and spaces in palindrome checks', () => {
      expect(isPalindrome('madam!')).to.be.false;
      expect(isPalindrome('a man a plan a canal panama')).to.be.false; // Without cleanup, it's false.
    });

    it('should handle empty strings as palindromes', () => {
      expect(isPalindrome('')).to.be.true;
    });

    it('should throw an error if input is not a string', () => {
      expect(() => isPalindrome(1001)).to.throw('Input must be a string');
      expect(() => isPalindrome(undefined)).to.throw('Input must be a string');
    });
  });
});
