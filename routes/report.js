const express = require("express");
const {
	addReport,
	getReports,
	getOneReport,
	moderateRep,
} = require("../controllers/report");

const router = express.Router();

router.post("/report", addReport);
router.get("/r/:id", getOneReport);
router.get("/reports", getReports);
router.post("/moderate-report", moderateRep);

module.exports = router;
