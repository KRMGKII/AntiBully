const { $where } = require("../models/article");
const article = require("../models/article");

exports.addArticle = async (req, res) => {
	const { title, brief, body, author } = req.body;
	if (!title || !brief || !body || !author)
		return res.status(400).send("MISSING INFO");

	const r = new article(req.body);

	try {
		await r.save();
		console.log("DONE");
		return res.json({ ok: true });
	} catch (e) {
		console.log(e);
		return res.json({ err: e });
	}
};

exports.getArticles = async (req, res) => {
	try {
		const articles = await article.find({ isModerated: { $eq: true } });
		res.send({ articles });
	} catch (e) {
		res.status(500).send(e);
	}
};

exports.getOneArticle = async (req, res) => {
	try {
		const id = req.params.id;
		const r = await article.findOne({ _id: id }).exec();
		return res.send(r);
	} catch (e) {
		return res.status(404).send(e);
	}
};

exports.moderateArt = async (req, res) => {
	const { id } = req.body;
	try {
		await article.findByIdAndUpdate(id, { $set: { isModerated: true } });
		res.status(200).send({ ok: true });
	} catch (err) {
		res.status(200).send({ error: err });
	}
};
