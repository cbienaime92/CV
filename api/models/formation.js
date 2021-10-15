const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const Formation = new Schema({
    nom:{
        type: String,
        required: [true, 'le nom est obligatoire']
    },

    anneeDebut:{
        type: Number,
        required: [true, 'l\'année est obligatoire']
    },
    
    anneeFin:{
        type: Number,

    },

    organisme:{
        type: String,
        required: [true, 'l\'organisme est obligatoire']
    }
}, {
    timestamps: true // ajoute 2 champs au document createdAt et updatedAt
});


module.exports = mongoose.model('Formation', Formation);