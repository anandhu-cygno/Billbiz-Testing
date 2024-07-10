require('dotenv').config()

const express = require('express')

const cors = require('cors')

const server = express()

const reportRouter = require("./router/reportRouter")

require('./database/connection/connection')

server.use(cors())

server.use(express.json())

server.use(reportRouter)

<<<<<<< HEAD
PORT = 3006

server.get('/',(req,res)=>{
    res.status(200).json("Bill BIZZ server started")
})

server.listen(PORT,()=>{
    console.log(`BillBIZZ server started at port : ${PORT}`);
=======
PORT = 5006

server.get('/',(req,res)=>{
    res.status(200).json("Bill BIZZ server started - Report ")
})

server.listen(PORT,()=>{
    console.log(`BillBIZZ server Report started at port : ${PORT}`);
>>>>>>> d9002ce8a4237c5bb8f605d02048c64475165e4b
})

