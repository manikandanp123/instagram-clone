const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const postSchema=new Schema({
    name:{type:String},
    place:{type:String},
    image:{type:String},
    likes:{type:Array},
    des:{type:String},
    date:{type:String},
    comment:{type:Array},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
},{
    timestamps:true
})

const posts=mongoose.model("Post",postSchema);

module.exports=posts;