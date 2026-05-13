import express from 'express'
import { syncUser } from './user.controller.js'
import { isAuthenticated } from '../../common/middleware/auth.middleware.js'

const router = express.Router()

router.post('/sync',isAuthenticated, syncUser)

export default router