import { Router } from 'express'
import userController from '../app/controllers/user.controller'
import validate from '../app/middlewares/validate'
import { register } from '../validations/auth.validation'

const router = new Router()
router
  .route('/')
  .post(validate(register), userController.createUser)
  .get(userController.getUsers)

router
  .route('/:userId')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser)

export default router
