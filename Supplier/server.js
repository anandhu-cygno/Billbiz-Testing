require('dotenv').config()

const express = require('express')

const cors = require('cors')

const server = express()

const supplierRouter = require("./router/supplierRouter")

require('./database/connection/connection')

server.use(cors())

server.use(express.json())

server.use(supplierRouter)

PORT = 3009

server.get('/',(req,res)=>{
    res.status(200).json("Bill BIZZ server started")
})

server.listen(PORT,()=>{
    console.log(`BillBIZZ server started at port : ${PORT}`);
})

