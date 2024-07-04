const express = require("express")

const router = new express.Router()

const organizationController = require("../controller/organizationController")

router.post('/add-organisation',organizationController.addOrganization)

router.get('/get-organisation',organizationController.getOrganization)

router.put('/edit-organisation',organizationController.updateOrganization)

router.delete('/delete-organisation/:id',organizationController.deleteOrganization)

module.exports = router