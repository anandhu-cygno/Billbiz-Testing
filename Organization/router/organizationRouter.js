const express = require("express")

const router = new express.Router()

const organizationController = require("../controller/organizationController")



//Production
router.post('/setup-organisation',organizationController.setupOrganization)

router.get('/get-additional-data',organizationController.getAdditionalData)

router.get('/get-one-organisation/:id',organizationController.getOneOrganization)

router.put('/edit-organisation/:id',organizationController.updateOrganization)

router.delete('/delete-organisation/:id',organizationController.deleteOrganization)



//Internal

router.get('/get-all-organisation',organizationController.getAllOrganization)

module.exports = router