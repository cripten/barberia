const express = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;

const user_schema = new Schema({
  Email: {type: String, required:true },
  username: {type: String, required:true },
  nombre: {type: String, required:true },
  apellido: {type: String, required:true },
  password: {type: String, required:true },
  tipo: {type: String, required:true },
  own: {type:Number}

});

//encrypt the password for more security
user_schema.methods.encryptPassword = function(password){
	return bcrypt.hashSync(password, bcrypt.gentSaltSync(5) ,  null);
};
//compare if the password is the same
user_shema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User",user_schema);
