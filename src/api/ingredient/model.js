// Tu definiujemy model bazodanowy

const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const ingredientSchema = new Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true
    },
      name: {
      type: String,
      required: true
    },
    availability: {
      type: String,
      required: true
    }
  }, {
    timestamps: true,
})

ingredientSchema.methods = {
    view (full) {
        const view = {
             // simple view
            id: this.id,
            name: this.name,
            availability: this.availability
        }
    
        return full ? {
            ...view,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        } : view
    }
}

const model = mongoose.model('Ingredient', ingredientSchema)
  
module.exports = {model, ingredientSchema}
