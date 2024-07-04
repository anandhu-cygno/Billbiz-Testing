const express = require("express")

const router = new express.Router()

const organizationController = require("../controller/organizationController")

router.post('/add-organisation',organizationController.addOrganization)

router.get('/get-all-organisation',organizationController.getAllOrganization)

router.get('/get-one-organisation/:_id',organizationController.getOneOrganization)

router.put('/edit-organisation',organizationController.updateOrganization)

router.delete('/delete-organisation/:id',organizationController.deleteOrganization)

module.exports = router