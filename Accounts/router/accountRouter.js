const express = require("express")

const router = new express.Router()

const accountController = require("../controller/accountController")

router.post('/add-account',accountController.addAccount)

router.get('/get-all-account',accountController.getAllAccount)

router.get('/get-one-account/:id',accountController.getOneAccount)

router.put('/edit-account/:id',accountController.editAccount)

router.put('/delete-account/:id',accountController.deleteAccount)

module.exports = router
