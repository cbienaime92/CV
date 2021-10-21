var express = require('express');
var router = express.Router();


const formationController = require('./formation');
const experienceController = require('./experience');
const contactController = require('./contact');
const competenceController = require('./competence');
const loisirController = require('./loisir');
const langueController = require('./langue');
const profilController = require('./profil');


router.get('/', async (req, res) => {
    res.status(200).json({
        name   : 'API', 
        version: '1.0', 
        status : 200, 
        message: 'Bienvenue sur l\'API !'
    });
});

router.use('/formation', formationController);
router.use('/experience', experienceController);
router.use('/competence', competenceController);
router.use('/contact', contactController);
router.use('/loisir', loisirController);
router.use('/langue', langueController);
router.use('/profil', profilController);

module.exports = router;
