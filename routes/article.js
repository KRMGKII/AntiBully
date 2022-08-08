const express = require("express");
const {
	getArticles,
	getOneArticle,
	addArticle,
} = require("../controllers/article");

const router = express.Router();

router.get("/articles", getArticles);
router.get("/a/:id", getOneArticle);
router.post("/add-article", addArticle);

module.exports = router;
