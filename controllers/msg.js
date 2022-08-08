const msg = require("../models/msg");

exports.getMsg = async (req, res) => {
	try {
		console.log("DONE");
		return res.json({ msg: await msg.find({}) });
	} catch (e) {
		console.log(e);
		return res.json({ err: e });
	}
};
