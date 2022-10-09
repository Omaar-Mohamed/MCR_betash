const mongoose = require("mongoose");
const internal = require("stream");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const AddData = new Schema({
    product_name:String,
    product_price:Number,
    product_image:String,
    product_description:String
});
 
 
// Create a model based on that schema
const Add = mongoose.model("Add", AddData);
 
 
// export the model
module.exports = Add; 


