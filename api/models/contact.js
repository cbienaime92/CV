const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const Contact = new Schema({
    
    nom:{
        type: String,
        required: [true, 'le nom est obligatoire']
    },
    prenom:{
        type: String,
        required: [true, 'le prénom est obligatoire']
    },
    metier:{
        type: String,
        required: [true, 'le métier est obligatoire']
    },

    ville:{
        type: String,
        required: [true, 'la ville est obligatoire']
    },

    email:{
        type: String,
        required: [true, 'le mail est obligatoire']
    },
    
    tel:{
        type: String,
        required: [true, 'le téléphone est obligatoire']

    },

    permis:{
        type: String,
        required: [false]
    }
}, {
    timestamps: true // ajoute 2 champs au document createdAt et updatedAt
},
{
    id: false
}
);


module.exports = mongoose.model('Contact', Contact);