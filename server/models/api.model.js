const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

const ApiSchema = new mongoose.Schema({
	origen:{
		type: String, 
			 unique: true,
			 required: [true, 'Requiere de un nombre de pelicula'],
			 minleght: [3, 'El nombre de pelicula no puede tener menos de 3 caracteres'],
			 maxlength: [30, 'Nombre de la pelicula no puede tener mas de 30 caracteres']
			 
	},
	paquete:{
		type: String, 
			 unique: true,
			 required: [true, 'Requiere de un nombre de pelicula'],
			 minleght: [3, 'El nombre de pelicula no puede tener menos de 3 caracteres'],
			 maxlength: [30, 'Nombre de la pelicula no puede tener mas de 30 caracteres']
			 
	},
	vuelo:{
		type: String, 
			 unique: true,
			 required: [true, 'Requiere de un nombre de pelicula'],
			 minleght: [3, 'El nombre de pelicula no puede tener menos de 3 caracteres'],
			 maxlength: [30, 'Nombre de la pelicula no puede tener mas de 30 caracteres']
			 
	},
	pasajeros: [ String ],
	titular:{
		type: String, 
			 unique: true,
			 required: [true, 'Requiere de un nombre de pelicula'],
			 minleght: [3, 'El nombre de pelicula no puede tener menos de 3 caracteres'],
			 maxlength: [30, 'Nombre de la pelicula no puede tener mas de 30 caracteres']
			 
	},		
});

ApiSchema.plugin(uniqueValidator, {message:"El campo {PATH} debe ser único. '{VALUE}' ya existe"})
const Api = mongoose.model("peliculas", ApiSchema);
module.exports = Api;

