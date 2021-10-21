const express = require('express');
const router = express.Router();

const service = require('../services/experience');

router.get('/', service.getall);

router.get('/:id', service.getById);

router.put('/add', service.add);

router.patch('/update', service.update);

router.delete('/delete', service.delete);

module.exports = router;