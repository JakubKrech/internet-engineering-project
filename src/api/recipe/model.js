// Tu definiujemy model bazodanowy

const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const recipeSchema = new Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true
    },
      name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    ingredients: {
        type: Array
    },
    preparationTime: {
        type: Number
    }
    
  }, {
    timestamps: true,
})

recipeSchema.methods = {
  view (full) {
      const view = {
           // simple view
          id: this.id,
          name: this.name,
          category: this.category,
          price: this.price
      }
  
      return full ? {
          ...view,
          ingredients: this.ingredients,
          preparationTime: this.preparationTime,
          createdAt: this.createdAt,
          updatedAt: this.updatedAt
      } : view
  }
}
  
const model = mongoose.model('Recipe', recipeSchema)
  
module.exports = {model, recipeSchema}
  