const express = require("express")

const router = new express.Router()

const itemController = require("../controller/itemController");
const unitController = require("../controller/unitController");
const manufacturerController = require("../controller/manufacturerController");
const rackController = require("../controller/rackController");



                            //  //  //  INVENTORY   //  //  //

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


//Rack
router.post('/add-rack', rackController.addRack);
router.get('/get-all-rack', rackController.getAllRack);
router.get('/get-one-rack/:_id', rackController.getOneRack);
router.put('/edit-rack', rackController.updateRack);
router.delete('/delete-rack/:id', rackController.deleteRack);


//manufacturer
router.post('/addManufacturer', manufacturerController.addManufacturer);
router.get('/getAllManufacturer', manufacturerController.getAllManufacturer)
router.get('/getAManufacturer/:id',manufacturerController.getAManufacturer)
router.put('/updateManufacturer/:id', manufacturerController.updateManufacturer)
router.delete('/deleteManufacturer/:id',manufacturerController.deletedManufacturer)



module.exports = router