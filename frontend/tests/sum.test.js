function sum(a, b) { return a + b; }

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.error(`Assertion failed: ${message}. Expected ${expected}, got ${actual}`);
    process.exit(1);
  }
}

assertEqual(sum(1, 2), 3, 'sum adds numbers');
console.log('All tests passed'); 