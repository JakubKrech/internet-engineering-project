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

const search = ({query}, res, next) => {
    let dbquery = []
    for(const key in query){
        switch (key) {
            case 'ingredient':
                dbquery.push({"ingredients": {$regex: new RegExp(`${query['ingredient']}`), $options: 'i'}})
                break;
            case 'cheaper':
                dbquery.push({"price": {$lte: parseInt(query['cheaper']) }})
                break;
            case 'faster':
                dbquery.push({"preparationTime": {$lte: parseInt(query['faster']) }})
                break;
        }
    }
        
    if(dbquery.length === 0) return res.json([])
        
    return Recipe.find({$and : dbquery}).sort({price: -1}).limit(10)
        .then(notFound(res))
        .then((recipe) => recipe ? recipe.map(recipe => recipe.view(true)) : null)
        .then(success(res))
        .catch(next)
}

module.exports = {
    create, index, show, update, destroy, search
}