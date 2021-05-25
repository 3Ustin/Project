const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
	malt: {
		type:Number,
		required:[true, "must include a number"],
		validate:{
			validator: (input) => {
				return !(isNaN(input));
			},
			message: (input) => `${input.value} is not a number.`
			
		}
	},
	barley: {
		type:Number,
		required:[true, "must include a number"],
		validate:{
			validator: (input) => {
				return !(isNaN(input));
			},
			message: (input) => `${input.value} is not a number.`
			
		}
	},
	wheat: {
		type:Number,
		required:[true, "must include a number"],
		validate:{
			validator: (input) => {
				return !(isNaN(input));
			},
			message: (input) => `${input.value} is not a number.`
			
		}
	},
	hops: {
		type:Number,
		required:[true, "must include a number"],
		validate:{
			validator: (input) => {
				return !(isNaN(input));
			},
			message: (input) => `${input.value} is not a number.`
			
		}
	},
	beer: {
		type:Number,
		required:[true, "must include a number"],
		validate:{
			validator: (input) => {
				return !(isNaN(input));
			},
			message: (input) => `${input.value} is not a number.`
			
		}
	},
});

const Resource = mongoose.model("Resource", ResourceSchema);

module.exports = Resource;