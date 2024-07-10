require('dotenv').config()

const express = require('express')

const cors = require('cors')

const server = express()

const organizationRouter = require("./router/organizationRouter")

require('./database/connection/connection')

server.use(cors())

server.use(express.json())

server.use(organizationRouter)

<<<<<<< HEAD
PORT = 3004
=======
PORT = 5004
>>>>>>> d9002ce8a4237c5bb8f605d02048c64475165e4b

server.get('/',(req,res)=>{
    res.status(200).json("Bill BIZZ server started - Organization ")
})

server.listen(PORT,()=>{
    console.log(`BillBIZZ server Organization started at port : ${PORT}`);
})

