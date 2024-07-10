require('dotenv').config()

const express = require('express')

const cors = require('cors')

const server = express()

const customerRouter = require("./router/customerRouter")

require('./database/connection/connection')

server.use(cors())

server.use(express.json())

server.use(customerRouter)

<<<<<<< HEAD
PORT = 3002

server.get('/',(req,res)=>{
    res.status(200).json("Bill BIZZ server started")
})

server.listen(PORT,()=>{
    console.log(`BillBIZZ server started at port : ${PORT}`);
=======
PORT = 5002

server.get('/',(req,res)=>{
    res.status(200).json("Bill BIZZ server started - Customer")
})

server.listen(PORT,()=>{
    console.log(`BillBIZZ server Customer started at port : ${PORT}`);
>>>>>>> d9002ce8a4237c5bb8f605d02048c64475165e4b
})

