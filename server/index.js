import express from "express";
import bodyParser from 'body-parser'
import mongoose from "mongoose";
import cors from 'cors'

import postRoute from './route/posts.js'

const app = express()



app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb' ,extended: true}));
app.use(cors())
app.use('/posts', postRoute)


const CONNECTION_URL = 'mongodb+srv://Raisul:(1234567890)@cluster0.rmzcc.mongodb.net/merndev?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(PORT, () => console.log(`server raning on port ${PORT}`)))
.catch((error) => console.log(error.message))


