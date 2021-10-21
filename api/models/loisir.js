const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const Loisir = new Schema({
    nom:{
        type: String,
        required: [true, 'la ville est obligatoire']
    },
    details:{
        type: [String],
    }


    
}, {
    timestamps: true // ajoute 2 champs au document createdAt et updatedAt
});


module.exports = mongoose.model('Loisir', Loisir);