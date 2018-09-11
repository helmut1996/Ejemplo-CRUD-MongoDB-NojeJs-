const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Listas= new Schema({
    nombre: String,
    numero: Number,
    precio: Number,
    fecha: String
});

module.exports= mongoose.model('Lista',Listas);