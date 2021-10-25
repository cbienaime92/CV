const express = require('express');
const router = express.Router();

const service = require('../services/profil');

router.get('/', service.getall);

router.get('/:id', service.getById);

router.get('/intitule/:intitule',service.getByName)

router.post('/add', service.add);

router.patch('/update', service.update);

router.delete('/delete', service.delete);

module.exports = router;
