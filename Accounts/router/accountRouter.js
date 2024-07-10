const express = require("express")

const router = new express.Router()

const accountController = require("../controller/accountController")

router.post('/add-account',accountController.addAccount)

router.get('/get-one-account',accountController.getOneAccount)

router.get('/get-account-type',accountController.getAccountType)

module.exports = router
