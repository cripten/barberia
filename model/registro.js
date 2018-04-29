const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registro_schema = new Schema({
  nombre: {type: String, required:true },
  descripcion: {type: String, required:true },
  precio: {type: Number, required:true },
  serv: {type:Schema.Types.ObjectId, ref:"Servicio"} 
});

module.exports = mongoose.model("Registro", registro_schema);
