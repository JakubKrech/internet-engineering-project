// Tu definiujemy model bazodanowy

const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const dishSetSchema = new Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true
    },
      name: {
      type: String,
      required: true
    },
    recipes: {
        type: Array
    }
  }, {
    timestamps: true,
})

dishSetSchema.methods = {
    view (full) {
        const view = {
             // simple view
            id: this.id,
            name: this.name
        }
    
        return full ? {
            ...view,
            recipes: this.recipes,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        } : view
    }
}

const model = mongoose.model('dishSet', dishSetSchema)
  
module.exports = {model, dishSetSchema}