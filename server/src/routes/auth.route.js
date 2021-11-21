import { Router } from 'express'
const router = new Router()
import authController from '../app/controllers/auth.controller'
import validate from '../app/middlewares/validate'
import {
  register,
  activate,
  signing,
  forgotPassword,
  resetPassword,
  updateInfo,
  singout,
} from '../validations/auth.validation'

router.post('/register', validate(register), authController.register)
router.post('/activation', validate(activate), authController.activate)
router.post('/signing', validate(signing), authController.signing)
router.get('/access-token', authController.accessToken)
router.post(
  '/forgot-password',
  validate(forgotPassword),
  authController.forgotPassword
)
router.post(
  '/reset-password',
  validate(resetPassword),
  authController.resetPassword
)
router.post('/singout', validate(singout), authController.singout)
router.get('/info', validate(register), authController.info)
router.patch('/update-user', validate(updateInfo), authController.updateInfo)
router.patch('/google-signing', authController.loginWithGoogle)

export default router
