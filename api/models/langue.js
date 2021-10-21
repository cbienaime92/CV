const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const Langue = new Schema({
    nom:{
        type: String,
        required: [true, 'le nom est obligatoire']
    },
    niveau:{
        type: String
    }    
}, {
    timestamps: true // ajoute 2 champs au document createdAt et updatedAt
});


module.exports = mongoose.model('Langue', Langue);