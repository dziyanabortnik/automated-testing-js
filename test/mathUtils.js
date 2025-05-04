import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../utils/mathUtils.js';

describe('Math Utils', () => {
  const validateInputs = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Inputs must be numbers');
    }
  };

  describe('add', () => {
    it('should return the sum of two positive numbers', () => {
      expect(add(3, 7)).to.equal(10);
    });

    it('should return the sum of two negative numbers', () => {
      expect(add(-5, -2)).to.equal(-7);
    });

    it('should return the correct sum when adding zero', () => {
      expect(add(10, 0)).to.equal(10);
    });

    it('should throw an error if inputs are not numbers', () => {
      expect(() => {
        validateInputs('3', 7);
        add('3', 7);
      }).to.throw(Error, 'Inputs must be numbers');
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      expect(subtract(10, 7)).to.equal(3);
    });

    it('should return a negative result if the second number is larger', () => {
      expect(subtract(7, 10)).to.equal(-3);
    });

    it('should handle subtracting zero', () => {
      expect(subtract(10, 0)).to.equal(10);
    });

    it('should throw an error if inputs are not numbers', () => {
      expect(() => {
        validateInputs('3', 7);
        subtract('3', 7);
      }).to.throw(Error, 'Inputs must be numbers');
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(multiply(3, 5)).to.equal(15);
    });

    it('should return zero when multiplying by zero', () => {
      expect(multiply(10, 0)).to.equal(0);
    });

    it('should handle negative numbers correctly', () => {
      expect(multiply(-2, 3)).to.equal(-6);
    });

    it('should throw an error if inputs are not numbers', () => {
      expect(() => {
        validateInputs('3', 7);
        multiply('3', 7);
      }).to.throw(Error, 'Inputs must be numbers');
    });
  });

  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it('should handle negative divisors correctly', () => {
      expect(divide(10, -2)).to.equal(-5);
    });

    it('should throw an error if inputs are not numbers', () => {
      expect(() => {
        validateInputs('3', 7);
        divide('3', 7);
      }).to.throw(Error, 'Inputs must be numbers');
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).to.throw(Error, 'Cannot divide by zero');
    });
  });
});
