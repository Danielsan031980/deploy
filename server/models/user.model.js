const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "First name is required"],
    },
    mail: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
      },
      unique:true
    },
    pass: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"],
    },
    pais: {
      type: String,
      required: [true, "Country name is required"],
    },
    direccion: {
      type: String,
      required: [true, "Address name is required"],
    }
  },
  { timestamps: true }
);

UserSchema.plugin(uniqueValidator,{ message: 'Error, {PATH} ya existe' });

//Establecemos el get y el set de la variable confirmPassword, que llega como campo en el body, 
//pero no es almacenada en el UserSchema.
UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

//Validamos que la password y la confirmPassword sean iguales.
//Validación se hará sólo si el usuario es nuevo this.isNew
UserSchema.pre("validate", function (next) {
  if (this.isNew && this.pass !== this["confirmPassword"]) {
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  next();
});

//Encriptamos la contraseña
//Operación se hará sólo si el usuario es nuevo this.isNew
UserSchema.pre("save", function (next) {
  if (this.isNew)
    bcrypt.hash(this.pass, 10).then((hash) => {
      this.pass = hash;
      next();
    });
  else next();
});


const User = mongoose.model('User', UserSchema);

module.exports = { UserSchema, User };
