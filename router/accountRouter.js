const express = require("express")

const router = new express.Router()

const accountController = require("../controller/accountController")

router.post('/add-account',accountController.addAccount)

router.get('/get-one-account',accountController.getOneAccount)


module.exports = router