const multiply = require('./multiply');

test('multiplication(1, 1) to equal 1', () => {
  expect(multiply(1,1)).toBe(1);
})

test('multiplication(45, 23) to equal 1035', () => {
  expect(multiply(45,23)).toBe(1035);
})

test('multiplication(6) to equal "Please enter two Integer inputs"', () => {
  expect(multiply(6)).toBe("Please enter two Integer inputs");
})

test('multiplication(a, b) to equal "Please enter two Integer inputs"', () => {
  expect(multiply('a','b')).toBe("Please enter two Integer inputs");
})

test('multiplication([1, 2, 3], 4) to equal "Please enter two Integer inputs"', () => {
  expect(multiply([1, 2, 3],4)).toBe("Please enter two Integer inputs");
})

test('multiplication(1, 2, 3) to equal "Please enter two Integer inputs"', () => {
  expect(multiply(1, 2, 3)).toBe("Please enter two Integer inputs");
})

const concatOdds = require('./concat');

test('concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to equal [-1, 1, 3, 9, 15]', () => {
  expect(concatOdds([3, 2, 1],[9, 1, 1, 1, 4, 15, -1])).toEqual([-1, 1, 3, 9, 15]);
})

test('concatOdds([1, 1, 1], [1, 1, 1, 1]) to equal [1]', () => {
  expect(concatOdds([1, 1, 2],[1, 1, 1, 1])).toEqual([1]);
})

test('concatOdds([3, 2, 1], 79) to equal "Enter two arrays as inputs"', () => {
  expect(concatOdds([3, 2, 1], 79)).toEqual("Enter two arrays as inputs");
})

test('concatOdds([3, 2, 1], b) to equal "Enter two arrays as inputs"', () => {
  expect(concatOdds([3, 2, 1], 'b')).toEqual("Enter two arrays as inputs");
})

test('concatOdds([1, 3, 5, 7]) to equal "Enter two arrays as inputs"', () => {
  expect(concatOdds([1, 3, 5, 7])).toEqual("Enter two arrays as inputs");
})

test('concatOdds([1, 3, 5, 7], [2, 4, 6, 4], [9, 3, 11, 15]) to equal "Enter two arrays as inputs"', () => {
  expect(concatOdds([1, 3, 5, 7], [2, 4, 6, 4], [9, 3, 11, 15])).toEqual("Enter two arrays as inputs");
})