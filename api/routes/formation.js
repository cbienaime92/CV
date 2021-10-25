const express = require('express');
const router = express.Router();

const service = require('../services/formation');

router.get('/', service.getall);

router.get('/:id', service.getById);

router.post('/add', service.add);

router.patch('/update', service.update);

router.delete('/delete/:id', service.delete);

module.exports = router;
