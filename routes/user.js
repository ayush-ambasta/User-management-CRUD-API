const express =require('express');
const router = express.Router();
const Controller=require("../contollers/user");

router.post('/create',Controller.create);
router.put('/update/:username',Controller.update);
router.get('/getdetails/:username',Controller.getdetails);
router.delete('/delete/:username',Controller.delete);

module.exports=router;