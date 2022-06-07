const mongoose=require("mongoose");
const productsSchema=mongoose.Schema({
    title : {type:String,required:true},
    img:{type:String,required:true} ,
    price :{type:Number,required:true},
    discounted_price :{type:Number,required:true},
    color :{type:String,required:true},
    size:{type:String,required:true},
    
  },{
    timestamps:true,
    versionKey:false,
})
const Products =mongoose.model("product",productsSchema);
module.exports=Products;