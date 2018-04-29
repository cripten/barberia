const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const servicio_schema = new Schema({
  nombre: {type: String, required:true },
  descripcion: {type: String, required:true },
  precio: {type: Number, required:true },
  creator: {type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Servicio", servicio_schema);
