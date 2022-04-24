const Api = require("../models/api.model");


module.exports.getAllApi = (req, res) => {
  Api.find()
    .then(allApi => res.json({ api: allApi }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createPirate = (req, res) => {
  Api.create(req.body)
    .then(newlyCreatedApi => res.json({ api: newlyCreatedApi }))
    .catch(err => res.status(400).json(err));
};

module.exports.getSingleApi = (req, res) => {
  console.log(req.params)
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
    .then(updateApi => res.json({ api: updateApi }))
    .catch(err => res.status(400).json(err));
};


module.exports.changeSkill = async (req,res) => {

  try {
    const pirate = await Api.findById(req.params.id);
    console.log(pirate.pedLeg)
       if(req.params.skill === "1"){
           pirate.pedLeg=!pirate.pedLeg;
           console.log(pirate.pedLeg)
       }
      if(req.params.skill === "2"){
          pirate.eyePatch=!pirate.eyePatch;
      }
      if(req.params.skill === "3"){
         pirate.hookHand=!pirate.hookHand;
      }

      await pirate.updateOne();
      return res.json({pirate:pirate});

  }catch(err){
      res.status(500).json(err);
  }
}


module.exports.createP = async(req,res)=>{

  try{
      const pirata = await Api.find({crewPosition:"Captain"}).exec();
      if (pirata.length===1 && req.body.crewPosition === "Captain"){
          res
          .status(400)
          .json({ errors: { error: { message: " Captain alredy exist" } } });
      }else{
          const pirata = new Api(req.body);
          await pirata.save();
          return res
              .json({pirata:pirata});
      }

  }catch(error){
      res.status(400).json(error);
  }
}