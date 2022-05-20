const express = require('express');
const router = express.Router();
const Reg = require('../modules/shortlyModule')

router.get('/shorturl', Reg.shorturl)
router.post('/create', Reg.create);
router.delete('/delete/:id', Reg.delete);
router.get('/:shortid', Reg.geturl);

module.exports = router;