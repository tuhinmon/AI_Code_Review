const express = require('express');
const aicontroller = require("../controllers/ai.controller")
const router = express.Router();


router.post("/get-review",aicontroller.getReview)




module.exports = router;