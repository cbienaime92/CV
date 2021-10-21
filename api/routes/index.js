var express = require('express');
var router = express.Router();


const formationController = require('./formation');
const experienceController = require('./experience');
const contactController = require('./contact');


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
router.use('/contact', contactController);

module.exports = router;
