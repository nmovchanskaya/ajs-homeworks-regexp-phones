export default function validatePhoneNumber(str) {
  let newStr = str.replaceAll(/[()-\s]*/g, '');

  if (newStr[0] === '8') {
    newStr = newStr.replace('8', '+7');
  }

  return newStr;
}

validatePhoneNumber('+7 (915) 128-75  07');
