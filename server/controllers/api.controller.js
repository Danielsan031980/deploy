const Api = require("../models/api.model");


module.exports.getAllApi = (req, res) => {
  Api.find()
    .then(allApi => res.json({ api: allApi }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createApi = (req, res) => {
  Api.create(req.body)
    .then(newlyCreatedApi => res.json({ api: newlyCreatedApi }))
    .catch(err => res.status(400).json(err));
};

module.exports.getSingleApi = (req, res) => {
  Api.findOne({ _id: req.params.id })
    .then(oneSingleApi => res.json({ api: oneSingleApi }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteApi = (req, res) => {
  Api.deleteOne({ _id: req.params.id })
    .then(result => res.json({ api: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

 

module.exports.updateApi = (req, res) => {
  Api.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updateApi => res.json({ autor: updateApi }))
    .catch(err => res.status(400).json(err));
};



