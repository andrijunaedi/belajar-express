import validator from 'validator';
import isEmpty from './isEmpty';

const validateRegisterInput = (data) => {
  let errors = {};

  const { name, email, password, password2 } = data;

  name = !isEmpty(name) ? name : '';
  email = !isEmpty(email) ? email : '';
  password = !isEmpty(password) ? password : '';
  password2 = !isEmpty(password2) ? password2 : '';

  if (!validator.isLength(name, { min: 3, max: 50 })) {
    errors.name = 'Nama Harus diantara 3 dan 50 Karakter';
  }

  if (!validator.isLength(password, { min: 6, max: 50 })) {
    errors.password = 'Password minimal 6 karakter';
  }

  if (validator.isEmpty(name)) {
    errors.name = 'Data nama dibutuhkan';
  }

  if (validator.isEmpty(email)) {
    errors.email = 'Data Email dibutuhkan';
  }

  if (!validator.isEmail(email)) {
    errors.email = 'Email tidak valid';
  }

  if (validator.isEmpty(password)) {
    errors.password = 'Data Password dibutuhkan';
  }

  if (!validator.equals(password2, password)) {
    errors.password2 = 'Data password dan confirmed password harus sama';
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = 'Data Confirm Password dibutuhkan';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateRegisterInput;
