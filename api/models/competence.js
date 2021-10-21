const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const Competence = new Schema({
    
    nom:{
        type: String,
        required: [true, 'le nom est obligatoire']
    },
    details:{
        type: [String],
    }
}, {
    timestamps: true // ajoute 2 champs au document createdAt et updatedAt
},

);


module.exports = mongoose.model('Competence', Competence);