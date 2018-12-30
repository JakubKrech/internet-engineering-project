// Plik centralny API - tu importujemy enpointy (index.js) z poszczegolnych katalogow

const Router = require('express')
const recipe = require('./recipe')
const ingredient = require('./ingredient')
const dishset = require('./dishSet')
const _ = require('lodash')

const router = new Router()

router.use('/recipe', recipe)
router.use('/ingredient', ingredient)
router.use('/dishSet', dishset)

// 404 Error handler
router.use((req, res, next) =>  res.status(404).send({errors: ['Routing not found']}))

// Error handler
router.use((err, req, res, next) =>  {
    if(err.name === 'ValidationError'){
        const errors = _.map(err.errors, (v) => v.message )
        return res.status(400).send({errors})
    }

    console.error(err)
    res.status(500).send({errors: ['Application error']})
})

module.exports = router
