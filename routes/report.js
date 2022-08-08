const express = require("express");
const {
	addReport,
	getReports,
	getOneReport,
} = require("../controllers/report");

const router = express.Router();

router.post("/report", addReport);
router.get("/r/:id", getOneReport);
router.get("/reports", getReports);

module.exports = router;
