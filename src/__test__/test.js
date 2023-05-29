import validatePhoneNumber from '../validate.js';

test('8 (927) 000-00-00', () => {
  const newPhone = validatePhoneNumber('8 (927) 000-00-00');
  expect(newPhone).toBe('+79270000000');
});

test('+7 960 000 00 00', () => {
  const newPhone = validatePhoneNumber('+7 960 000 00 00');
  expect(newPhone).toBe('+79600000000');
});

test('+86 000 000 0000', () => {
  const newPhone = validatePhoneNumber('+86 000 000 0000');
  expect(newPhone).toBe('+860000000000');
});
