import Express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import router from './routes'

mongoose.connect("mongodb://edujs:edujs123@ds363058.mlab.com:63058/edujs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const app = Express()

app.use(cors())
app.use(Express.json())
app.use(router)

export default app;