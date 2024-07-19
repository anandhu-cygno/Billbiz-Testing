const express = require("express")

const router = new express.Router()

const supplierController = require('../controller/supplierController')

// supplier
router.post('/addSuppliers', supplierController.addSupplier);
router.get('/getAllSupplier', supplierController.getAllSuppliers);
router.get('/getSupplier/:id', supplierController.getASupplier);
router.put('/updateSupplier/:id', supplierController.updateSupplier);
router.delete('/deleteSupplier/:id', supplierController.deleteSupplier);


module.exports = router