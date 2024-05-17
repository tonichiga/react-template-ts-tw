function lengthValidation(value, length) {
  if (value.length < length) return false;
  return true;
}

function emailValidation(value) {
  if (!lengthValidation(value, 1)) return false;
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(value))) {
    return false;
  }
  return true;
}

function phoneValidation(value) {
  let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (!re.test(value)) {
    return false;
  }
  return true;
}

function matchValidation(value1, value2) {
  return value1 === value2;
}

function phoneValidate(value) {
  const isValid = value.length > 11;
  return isValid;
}

function passwordValidate(value) {
  const re = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/;

  const result = re.test(value);
  return result;
}

const validations = {
  lengthValidation,
  emailValidation,
  matchValidation,
  phoneValidation,
  phoneValidate,
  passwordValidate,
};

export default validations;
