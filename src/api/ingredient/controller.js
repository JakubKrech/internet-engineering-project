// Tu definiujemy funkcje obslugujace routing

const { success, notFound } = require('../../services/response/')
const Ingredient = require('./model').model

const create = ({ body }, res, next) =>
    Ingredient.create(body)
        .then((ingredient) => ingredient.view(true))
        .then(success(res, 201))
        .catch(next)

const index = ({ query }, res, next) =>
    Ingredient.find(query)
        .then((ingredient) => ingredient.map((ingredient) => ingredient.view()))
        .then(success(res))
        .catch(next)

const show = ({ params }, res, next) => 
    Ingredient.findById(params.id)
        .then(notFound(res))
        .then((ingredient) => ingredient ? ingredient.view(true) : null)
        .then(success(res))
        .catch(next)
  
const update = ({ body, params }, res, next) =>
    Ingredient.findById(params.id)
        .then(notFound(res))
        .then((ingredient) => ingredient ? Object.assign(ingredient, body).save() : null)
        .then((ingredient) => ingredient ? ingredient.view(true) : null)
        .then(success(res))
        .catch(next)
  
const destroy = ({ params }, res, next) =>
    Ingredient.findById(params.id)
        .then(notFound(res))
        .then((ingredient) => ingredient ? ingredient.remove() : null)
        .then(success(res, 204))
        .catch(next)

module.exports = {
    create, index, show, update, destroy
}