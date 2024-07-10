const express = require("express")

const router = new express.Router()

const accountController = require("../controller/accountController")

router.post('/add-account',accountController.addAccount)

router.get('/get-one-account',accountController.getOneAccount)

router.get('/get-account-type',accountController.getAccountType)
<<<<<<< HEAD

=======
>>>>>>> d9002ce8a4237c5bb8f605d02048c64475165e4b

module.exports = router