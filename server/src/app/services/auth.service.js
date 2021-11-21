import createError from 'http-errors'
import { getUserByEmail } from './user.service'
/**
 * Login user with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginWithEmailAndPassword = async (email, password) => {
  const user = await getUserByEmail(email)
  if (user && (await user.isPasswordMatch(password))) return user
  throw new createError.Unauthorized('Incorrect email or password')
}

/**
 *
 * @param {string} resetPasswordToken
 * @param {string} newPassword
 * @returns {Promise<User>}
 */
const resetPassword = async (resetPasswordToken, newPassword) => {
  // verify token
  // update
  const user = await getUserByEmail(email)
  if (!user || user.isPasswordMatch(password)) {
    throw new createError.Unauthorized('Incorrect email or password')
  }
  return user
}

export { loginWithEmailAndPassword }
