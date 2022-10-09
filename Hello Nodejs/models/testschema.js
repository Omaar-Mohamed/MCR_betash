const { Double } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const testschema = new Schema({
  product_name:String,
  product_price:Number,
  product_image:String,
  product_description:String
});
 
 
// Create a model based on that schema
const Test = mongoose.model("Test", testschema);
 
 
// export the model
module.exports = Test; 


