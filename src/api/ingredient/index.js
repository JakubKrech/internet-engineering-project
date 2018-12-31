// Tu definiujemy routing i go exportujemy

const { Router } = require('express')
const { create, index, show, update, destroy, search, asc, desc} = require('./controller')

const router = new Router()

router.post('/',
  create)

router.get('/',
  index)

router.get('/search',
  search)

router.get('/asc',
  asc)

router.get('/desc',
  desc)

router.get('/:id',
  show)

router.put('/:id',
  update)

router.delete('/:id',
  destroy)


module.exports = router
