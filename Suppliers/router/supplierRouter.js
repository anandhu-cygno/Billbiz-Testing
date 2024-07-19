const express = require("express")

const router = new express.Router()

<<<<<<< HEAD
const supplierController = require('../controller/supplierController')

// supplier
router.post('/addSuppliers', supplierController.addSupplier);
router.get('/getAllSupplier', supplierController.getAllSuppliers);
router.get('/getSupplier/:id', supplierController.getASupplier);
router.put('/updateSupplier/:id', supplierController.updateSupplier);
router.delete('/deleteSupplier/:id', supplierController.deleteSupplier);
=======
//supplier
const supplierController = require('../controller/supplierController');
>>>>>>> bf9a6eb82eee609d60055131934b0d43c2b79bb5


// supplier
router.post('/addSuppliers', supplierController.addSupplier);
router.get('/getAllSupplier', supplierController.getAllSuppliers);
router.get('/getSupplier/:id', supplierController.getASupplier);
router.put('/updateSupplier/:id', supplierController.updateSupplier);
router.delete('/deleteSupplier/:id', supplierController.deleteSupplier);

module.exports = router