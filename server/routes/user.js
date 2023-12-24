import express from 'express'
import {login} from '../controllers/auth.js'
import {updatechannelData, getAllChannels} from '../controllers/channel.js'

const routes =express.Router();

routes.post('/login',login)
routes.patch('/update/:id',updatechannelData)
routes.get ('/getAllChannels',getAllChannels)


export default routes;