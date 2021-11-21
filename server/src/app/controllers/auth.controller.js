import { node_env, refreshExpiration } from '../../config/env.config'
import createError from 'http-errors'
import catchAsync from '../../utils/catchAsync'

import { userService, authService, tokenService } from '../services'
import sendMail from '../../helpers/sendMail'

/**
 * @POST api/register
 * @access public
 */
const register = catchAsync(async (req, res, next) => {
  // create token
  const activation_token = await tokenService.generateActivationToken(req.body)

  // send email
  const url = `http://localhost:8888/api/auth/activate/${activation_token}`
  sendMail.sendEmailRegister(req.body.email, url, 'Verify your email')

  // registration success
  return res.status(200).json({
    success: true,
    message: 'Welcome! Please check your email.',
  })
})

/**
 * @POST api/auth/activation
 * @access public
 */
const activate = catchAsync(async (req, res, next) => {
  // verify token
  const newUser = await tokenService.verifyActivationToken(
    req.body.activation_token
  )
  // add user
  await userService.createUser(newUser)

  // activation success
  return res.status(200).json({
    success: true,
    message: 'Your account has been activated, you can now sign in.',
  })
})

/**
 * @POST api/signing
 * @access public
 */
const signing = catchAsync(async (req, res) => {
  // Get cred
  const { email, password } = req.body

  // Login
  const user = await authService.loginWithEmailAndPassword(email, password)

  // refresh token
  const rf_token = await tokenService.generateRefreshToken(user.id)

  // store refresh token
  res.cookie('_apprftoken', rf_token, {
    httpOnly: true,
    path: '/api/auth/access',
    maxAge: 1000, // 3day = milliseconds
    secure: node_env === 'production',
  })

  res.status(200).json({ success: true, message: 'Signning success.' })
})

/**
 * @GET api/access-token
 * @access private
 */
const accessToken = catchAsync(async (req, res, next) => {
  //  rf_token
  const rf_token = req.cookies._apprftoken
  if (!rf_token) return next(createError.BadRequest('Please sign in.'))

  // verify token
  const { sub: userId } = await tokenService.verifyRefreshToken(rf_token)

  // create access token
  const ac_token = await tokenService.generateAccessToken(userId)

  // access success
  return res.status(200).json({ success: true, ac_token })
})

/**
 * @POST api/forgot-password
 * @access public
 */
const forgotPassword = catchAsync(async (req, res, next) => {
  const resetpass_token = await tokenService.generateResetPasswordToken(
    req.body.email
  )

  // send email
  const url = `http://localhost:3000/auth/reset-password/${resetpass_token}`
  sendMail.sendEmailReset(req.body.email, url, 'Reset your password', 'minh')

  // success
  res.status(200).json({
    success: true,
    message: 'Re-send the password, please check your email.',
  })
  res.status(200).json({ success: true })
})

/**
 * @POST api/reset-password
 * @access public
 */
const resetPassword = catchAsync(async (req, res) => {})

/**
 * @GET api/info
 * @access private
 */
const info = catchAsync(async (req, res) => {})

/**
 * @PATCH api/user-update
 * @access public
 */
const updateInfo = catchAsync(async (req, res, next) => {})

/**
 * @GET api/singout
 * @access private
 */
const singout = catchAsync(async (req, res) => {})

/**
 * @POST api/signing-google
 * @access public
 */
const loginWithGoogle = catchAsync(async (req, res) => {})

export default {
  register,
  activate,
  signing,
  accessToken,
  forgotPassword,
  resetPassword,
  info,
  updateInfo,
  singout,
  loginWithGoogle,
}
