const express = require("express")

const router = new express.Router()

const organizationController = require("../controller/organizationController")

const clientController = require("../controller/clientController")



//Production
router.post('/setup-organization',organizationController.setupOrganization)

router.get('/get-additional-data',organizationController.getAdditionalData)

router.get('/get-one-organization/:organizationId',organizationController.getOneOrganization)

// router.put('/edit-organization/:id',organizationController.updateOrganization)

router.delete('/delete-organization/:organizationId',organizationController.deleteOrganization)



//Internal

router.get('/get-all-organization',organizationController.getAllOrganization)

router.post('/create-client',clientController.createOrganizationAndClient)

router.get('/get-all-client',clientController.getAllClient)

router.get('/delete-all',clientController.deleteAll)


module.exports = router