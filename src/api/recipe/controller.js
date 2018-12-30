// Tu definiujemy funkcje obslugujace routing

const { success, notFound } = require('../../services/response/')
const Recipe = require('./model').model

const create = ({ body }, res, next) =>
    Recipe.create(body)
        .then((recipe) => recipe.view(true))
        .then(success(res, 201))
        .catch(next)

const index = ({ query }, res, next) =>
    Recipe.find(query)
        .then((recipe) => recipe.map((recipe) => recipe.view()))
        .then(success(res))
        .catch(next)

const show = ({ params }, res, next) => 
    Recipe.findById(params.id)
        .then(notFound(res))
        .then((recipe) => recipe ? recipe.view(true) : null)
        .then(success(res))
        .catch(next)
  
const update = ({ body, params }, res, next) =>
    Recipe.findById(params.id)
        .then(notFound(res))
        .then((recipe) => recipe ? Object.assign(recipe, body).save() : null)
        .then((recipe) => recipe ? recipe.view(true) : null)
        .then(success(res))
        .catch(next)
  
const destroy = ({ params }, res, next) =>
    Recipe.findById(params.id)
        .then(notFound(res))
        .then((recipe) => recipe ? recipe.remove() : null)
        .then(success(res, 204))
        .catch(next)

module.exports = {
    create, index, show, update, destroy
}