require('dotenv').config()

const express = require('express')

const cors = require('cors')

const server = express()

<<<<<<< HEAD
const saleRouter = require("./router/saleRouter")
=======
const salesRouter = require("./router/salesRouter")
>>>>>>> d9002ce8a4237c5bb8f605d02048c64475165e4b

require('./database/connection/connection')

server.use(cors())

server.use(express.json())

<<<<<<< HEAD
server.use(saleRouter)

PORT = 3007

server.get('/',(req,res)=>{
    res.status(200).json("Bill BIZZ server started")
})

server.listen(PORT,()=>{
    console.log(`BillBIZZ server started at port : ${PORT}`);
=======
server.use(salesRouter)

PORT = 5007

server.get('/',(req,res)=>{
    res.status(200).json("Bill BIZZ server started - Sales ")
})

server.listen(PORT,()=>{
    console.log(`BillBIZZ server Sales started at port : ${PORT}`);
>>>>>>> d9002ce8a4237c5bb8f605d02048c64475165e4b
})

