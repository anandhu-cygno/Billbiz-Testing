const express = require("express")

const router = new express.Router()

const itemController = require("../controller/itemController");
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




module.exports = router