// Tu definiujemy funkcje obslugujace routing

const { success, notFound } = require('../../services/response/')
const dishSet = require('./model').model

const create = ({ body }, res, next) =>
    dishSet.create(body)
        .then((dishset) => dishset.view(true))
        .then(success(res, 201))
        .catch(next)

const index = ({ query }, res, next) =>
    dishSet.find(query)
        .then((dishset) => dishset.map((dishset) => dishset.view()))
        .then(success(res))
        .catch(next)

const show = ({ params }, res, next) => 
    dishSet.findById(params.id)
        .then(notFound(res))
        .then((dishset) => dishset ? dishset.view(true) : null)
        .then(success(res))
        .catch(next)
  
const update = ({ body, params }, res, next) =>
    dishSet.findById(params.id)
        .then(notFound(res))
        .then((dishset) => dishset ? Object.assign(dishset, body).save() : null)
        .then((dishset) => dishset ? dishset.view(true) : null)
        .then(success(res))
        .catch(next)
  
const destroy = ({ params }, res, next) =>
    dishSet.findById(params.id)
        .then(notFound(res))
        .then((dishset) => dishset ? dishset.remove() : null)
        .then(success(res, 204))
        .catch(next)

module.exports = {
    create, index, show, update, destroy
}