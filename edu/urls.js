//write urls here
//To use routes u can use next example:
// const router = express.Router();
// router.get('/someroute', (req, res) => { 
//     res.send('some'); 
// }); 
//module.exports = router; 
//Write it to core urls: 
//const yourapp = require('../yourapp/urls');
// manager.app.use('/mainroute', someapp); 

const express = require("express");
const views = require("./views")

const router = express.Router();

router.get("/", views.index);
router.get("/welcome", views.onReg)
router.get("/hbs", views.testtemplate);

//exports
module.exports = {router}