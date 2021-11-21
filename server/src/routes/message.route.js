import { Router } from 'express'
import messageController from '../app/controllers/message.controller'

const router = new Router()
router.get('/', messageController.messagePage)

export default router
