const express = require("express")

const router = new express.Router()

const itemController = require("../controller/itemController");
<<<<<<< HEAD
const unitController = require("../controller/unitController")

// Item
router.post('/add-item', itemController.addItem);
router.get('/get-all-item', itemController.getAllItem);
router.get('/get-one-item/:id', itemController.getAItem)
router.put('/edit-item',itemController.updateItem)
router.delete('/delete-item/:id',itemController.deleteItem)


// Unit
router.post('/add-unit', unitController.addUnit);
router.get('/get-all-unit', unitController.getAllUnit);
router.get('/get-one-unit/:_id', unitController.getOneUnit);
router.put('/edit-unit', unitController.updateUnit);
router.delete('/delete-unit/:id', unitController.deleteUnit);
// Unit Conversion
router.post('/add-unitConversion', unitController.addUnitConversion);
router.get('/get-all-unitConversion', unitController.getAllUnitConversion);
router.get('/get-one-unitConversion/:_id', unitController.getOneUnitConversion);
router.put('/edit-unitConversion', unitController.updateUnitConversion);
router.delete('/delete-unitConversion/:id', unitController.deleteUnitConversion);


=======
const manufacturerController = require("../controller/manufacturerController");

// Item
router.post('/item/add', itemController.addItem);
router.get('/item/get-all', itemController.getAllItem);
router.get('/item/get/:id', itemController.getAItem)
router.put('/item/update/:id',itemController.updateItem)
router.delete('/item/delete/:id',itemController.deleteItem)

//manufacturer
router.post('/addManufacturer', manufacturerController.addManufacturer);
router.get('/getAllManufacturer', manufacturerController.getAllManufacturer)
router.get('/getAManufacturer/:id',manufacturerController.getAManufacturer)
router.put('/updateManufacturer/:id', manufacturerController.updateManufacturer)
router.delete('/deleteManufacturer/:id',manufacturerController.deletedManufacturer)
>>>>>>> 621997b016de2967174a98f8ea38c0c4242b1c8a


module.exports = router