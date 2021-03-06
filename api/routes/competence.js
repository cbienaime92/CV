const express = require('express');
const router = express.Router();

const service = require('../services/competence');

router.get('/', service.getall);

router.get('/:id', service.getById);

router.post('/add', service.add);

router.patch('/update', service.update);

router.delete('/delete', service.delete);

module.exports = router;
