const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const Profil = new Schema({
    intitule:{
        type: String,
        required: [true, 'l\'intitulé est obligatoire']
    }    
}, {
    timestamps: true // ajoute 2 champs au document createdAt et updatedAt
});


module.exports = mongoose.model('Profil', Profil);