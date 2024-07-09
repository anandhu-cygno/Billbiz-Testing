require('dotenv').config()

const express = require('express')

const cors = require('cors')

const server = express()

const staffRouter = require("./router/staffRouter")

require('./database/connection/connection')

server.use(cors())

server.use(express.json())

server.use(staffRouter)

PORT = 3008

server.get('/',(req,res)=>{
    res.status(200).json("Bill BIZZ server started")
})

server.listen(PORT,()=>{
    console.log(`BillBIZZ server started at port : ${PORT}`);
})

