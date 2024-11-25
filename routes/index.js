const express = require('express')
const router = express.Router()
const randomWYRQuestion = require('../model/wyr_questions')

router.get('/', function(req,res,next) {
    res.send('Placeholder for homepage')
})


router.get('/wyr', function(req, res, next) {
    // const wyr = {
    //     'question': 'Live in a circle house or a triangle house',
    //     'answer1': 'Circle house',
    //     'answer2': 'Triangle house'
    // }

    const wyr = randomWYRQuestion()

    res.json(wyr)
})

// anything that imports this file will know all routes in index.js
module.exports = router
