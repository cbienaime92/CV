const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const tachesSchema = new Schema({
    nom: String,
    taches: [String]
})

const Experience = new Schema({
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

    societe:{
        type: String,
        required: [true, 'la société est obligatoire']
    },

    taches:{
        type: [tachesSchema]
    }
    

}, {
    timestamps: true // ajoute 2 champs au document createdAt et updatedAt
});



module.exports = mongoose.model('Experience', Experience);