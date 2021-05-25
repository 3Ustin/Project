const Resource = require("../models/resources.model");

module.exports.findAllResources = (req, res) => {
  Resource.find()
    .then(allResource => res.json({ resource: allResource }))
    .catch(err => res.json({ message: "Something went wrong1", error: err }));
};

module.exports.findOneSingleResource = (req, res) => {
	Resource.findOne({ _id: req.params.id })
		.then(oneSingleResource => res.json({ resource: oneSingleResource }))
		.catch(err => res.json({ message: "Something went wrong2", error: err }));
};

module.exports.createNewResource = (req, res) => {
  Resource.create(req.body)
    .then(newlyCreatedResource => res.json({ resource: newlyCreatedResource }))
    .catch(err => res.json({ message: "Something went wrong3", error: err }));
};

module.exports.updateExistingResource = (req, res) => {
  Resource.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedResource => res.json({ resource: updatedResource }))
    .catch(err => res.json({ message: "Something went wrong4", error: err }));
};

module.exports.deleteAnExistingResource = (req, res) => {
  Resource.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong5", error: err }));
};

module.exports.deleteAllExistingResource = (req, res) => {
  Resource.deleteMany()
    .then(allResource => res.json({ resource: allResource }))
    .catch(err => res.json({ message: "Something went very wrong6", error: err }));
};
