const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

const ApiSchema = new mongoose.Schema({
	pirateName:{
		type: String, 
			 unique: true,
			 required: [true, 'Requiere de un nombre de pirata'],
			 minleght: [3, 'El nombre de pirata no puede tener menos de 3 caracteres'],
			 maxlength: [30, 'Nombre de la pirata no puede tener mas de 30 caracteres']			 
	},
	image:{
		type: String, 
			 unique: true,
			 required: [true, 'Requiere url de imagen'],			 
	},
	numberTreassures:{
		type: Number, 
			 required: [true, 'Requiere de un nombre Treassure'],
			 minleght: [1, 'El nombre de treassure no puede tener menos de 3 caracteres'],
			 
	},
	piratePhrase:{
		type: String, 
			 required: [true, 'Requiere de una frase de pirata'],
			 minleght: [3, 'la frase no puede tener menos de 3 caracteres'],
			 
	},	
	crewPosition:{
		type: String, 
			 required: [true, 'Requiere de un una posicion crew'],
			 minleght: [3, 'El nombre de la posision no puede tener menos de 3 caracteres'],		 
	},
	pedLeg:{
		type:Boolean
	},
	eyePatch:{
		type:Boolean
	},
	hookHand:{
		type:Boolean
	},
//	pasajeros: [ String ],
});

ApiSchema.plugin(uniqueValidator, {message:"El campo {PATH} debe ser único. '{VALUE}' ya existe"})
const Api = mongoose.model("pirates", ApiSchema);
module.exports = Api;

	