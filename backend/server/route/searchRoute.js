const express = require('express');
const router = express.Router();
const searchService = require('../service/searchService')

router.get('/search/', async function(req, res){
    const data = await searchService.getMeals('');
    res.json(data);
});

router.get('/search/:q', async function(req, res){
    const data = await searchService.getMeals(req.params.q);
    res.json(data);
});

module.exports = router;