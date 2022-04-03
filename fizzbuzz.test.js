
const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
    it('returns fizz when number is 3', () => {
      expect(fizzbuzz(3)).toBe('Fizz');
    })

    it('returns fizz when number is 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
      })

      it('returns fizz when number is 6', () => {
        expect(fizzbuzz(6)).toBe('Fizz');
      })

      it('returns fizz when number is 10', () => {
        expect(fizzbuzz(10)).toBe('Buzz');
      })

      it('returns fizz when number is 11', () => {
        expect(fizzbuzz(11)).toBe(11);
      })

      it('returns fizz when number is 15', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
      })
  });