const express = require("express");
const { getMsg } = require("../controllers/msg");

const router = express.Router();

router.get("/msg", getMsg);

module.exports = router;
