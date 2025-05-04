import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../utils/arrayUtils.js';

describe('Array Utils', () => {
  describe('findMax', () => {
    it('should return the maximum value in the array', () => {
      expect(findMax([3, 8, 1, 2, 7])).to.equal(8);
    });

    it('should handle an array with one element', () => {
      expect(findMax([42])).to.equal(42);
    });

    it('should throw an error if input is not an array', () => {
      expect(() => findMax('not an array')).to.throw('Input must be an array');
    });

    it('should throw an error if array is null', () => {
      expect(() => findMax(null)).to.throw('Input must be an array');
    });
  });

  describe('findMin', () => {
    it('should return the minimum value in the array', () => {
      expect(findMin([3, 8, 1, 2, 7])).to.equal(1);
    });

    it('should handle an array with one element', () => {
      expect(findMin([42])).to.equal(42);
    });

    it('should throw an error if input is not an array', () => {
      expect(() => findMin(123)).to.throw('Input must be an array');
    });

    it('should throw an error if array is undefined', () => {
      expect(() => findMin(undefined)).to.throw('Input must be an array');
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicate values in the array', () => {
      expect(removeDuplicates([1, 1, 2, 3, 3])).to.deep.equal([1, 2, 3]);
    });

    it('should return the same array if all values are unique', () => {
      expect(removeDuplicates([4, 5, 6, 7])).to.deep.equal([4, 5, 6, 7]);
    });

    it('should handle an empty array', () => {
      expect(removeDuplicates([])).to.deep.equal([]);
    });

    it('should throw an error if input is not an array', () => {
      expect(() => removeDuplicates('invalid input')).to.throw('Input must be an array');
    });

    it('should throw an error if array is null', () => {
      expect(() => removeDuplicates(null)).to.throw('Input must be an array');
    });
  });
});
