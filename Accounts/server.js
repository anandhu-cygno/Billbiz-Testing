// Loads .env file contents into process.env.
require('dotenv').config()

const express = require('express')

const cors = require('cors')


//create server app using express
const server = express()


const accountRouter = require("./router/accountRouter")


require('./database/connection/connection')
//use cors and express.json() to your server app  (application specific middleware)
server.use(cors())

server.use(express.json())

server.use(accountRouter)

//create port to  listen your server app
PORT = 3001

//api test
server.get('/',(req,res)=>{
    res.status(200).json("Bill BIZZ server started")
})

//Run server app in the specified port
server.listen(PORT,()=>{
    console.log(`BillBIZZ server started at port : ${PORT}`);
})

