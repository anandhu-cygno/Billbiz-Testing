const express = require("express")

const router = new express.Router()

//supplier
const supplierController = require('../controller/supplierController');


// supplier
router.post('/add-suppliers', supplierController.addSupplier);
router.get('/get-all-supplier', supplierController.getAllSuppliers);
router.get('/get-supplier/:id', supplierController.getASupplier);
router.put('/update-supplier/:id', supplierController.updateSupplier);
router.delete('/delete-supplier/:id', supplierController.deleteSupplier);

module.exports = router