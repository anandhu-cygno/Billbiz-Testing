require('dotenv').config()

const express = require('express')

const cors = require('cors')

const server = express()

const staffRouter = require("./router/staffRouter")

require('./database/connection/connection')

server.use(cors())

server.use(express.json())

server.use(staffRouter)

<<<<<<< HEAD
PORT = 3008

server.get('/',(req,res)=>{
    res.status(200).json("Bill BIZZ server started")
})

server.listen(PORT,()=>{
    console.log(`BillBIZZ server started at port : ${PORT}`);
=======
PORT = 5008

server.get('/',(req,res)=>{
    res.status(200).json("Bill BIZZ server started - Staff")
})

server.listen(PORT,()=>{
    console.log(`BillBIZZ server Staff started at port : ${PORT}`);
>>>>>>> d9002ce8a4237c5bb8f605d02048c64475165e4b
})

