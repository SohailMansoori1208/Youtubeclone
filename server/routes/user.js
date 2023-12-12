import express from 'express'
import {login} from '../controllers/auth.js'
import {updatechannelData} from '../controllers/channel.js'

const routes =express.Router();

routes.post('/login',login)
routes.post('/update/:id',updatechannelData)


export default routes;