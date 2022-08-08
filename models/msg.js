const mongoose = require("mongoose");
const { Schema } = mongoose;

const MsgModel = new Schema({
	msg: {
		type: String,
		required: true,
		trim: true,
	},
});

module.exports = mongoose.model("Msg", MsgModel);
