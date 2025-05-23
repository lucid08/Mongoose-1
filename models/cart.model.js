const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true, 
      unique: true 
    },
    products: [{
      productId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Product', 
        required: true 
      },
      quantity: { 
        type: Number, 
        required: true, 
        min: 1 
      }
    }],
    total: { type: Number, required: true, default: 0 }
  }, { timestamps: true });
  
  module.exports = mongoose.model('Cart', cartSchema);