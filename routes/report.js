const express = require("express");
const {
	addReport,
	getReports,
	getOneReport,
	deleteReport,
} = require("../controllers/report");

const router = express.Router();

router.post("/report", addReport);
router.get("/r/:id", getOneReport);
router.get("/reports", getReports);
router.post("/delete-report", deleteReport);

module.exports = router;
