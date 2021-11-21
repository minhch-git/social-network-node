import * as yup from 'yup'
import { transValidations } from '../../lang/en'
import config from './config.validation'
const register = {
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  password: yup
    .string()
    .matches(config.regexPassword, transValidations.password_incorrect)
    .required(),
}

const activate = {
  activation_token: yup.string().required(),
}

const signing = {
  email: yup.string().required(),
  password: yup
    .string()
    .matches(config.regexPassword, transValidations.password_incorrect)
    .required(),
}

const forgotPassword = {
  email: yup.string().email().required(),
}

const resetPassword = {
  password: yup
    .string()
    .matches(config.regexPassword, transValidations.password_incorrect)
    .required(),
}

const updateInfo = {
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email(),
  checkbox_selection: yup.string().when(['firstName', 'lastName', 'email'], {
    is: (firstName, lastName, email) => !firstName && !lastName && !email,
    then: yup.string().required(),
  }),
}

const singout = {
  refreshToken: yup.string().required(),
}

export {
  register,
  activate,
  signing,
  forgotPassword,
  resetPassword,
  updateInfo,
  singout,
}
