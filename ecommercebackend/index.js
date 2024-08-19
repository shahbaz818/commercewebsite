require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')





const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())







const port = 8000

//connect database

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Mongodb is connected')
    })


//import router
const userRouter = require('./routes/userRoutes.js')

app.use('/api/v1', userRouter)



app.listen(port, () => {
    console.log(`server is listening at port ${port}`)
})