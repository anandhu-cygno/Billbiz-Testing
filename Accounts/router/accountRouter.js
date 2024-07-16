const express = require("express")

const router = new express.Router()

const accountController = require("../controller/accountController")

const journalController = require("../controller/journalController")



//Accounts

router.post('/add-account',accountController.addAccount)

router.get('/get-all-account',accountController.getAllAccount)

router.get('/get-one-account/:id',accountController.getOneAccount)

router.put('/edit-account/:id',accountController.editAccount)

router.put('/delete-account/:id',accountController.deleteAccount)




//Journal

router.post('/add-journal-entry',journalController.addJournalEntry)


module.exports = router
