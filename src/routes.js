const express = require('express');
const DNAController = require('./controllers/DNAController');

const router = express.Router();

router.post('/', DNAController.isMutant);
router.get('/stats', DNAController.mutantStats);

module.exports = router;
