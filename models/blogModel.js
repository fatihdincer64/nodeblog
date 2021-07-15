const mongoose= require("mongoose");


const blogsemasi=new mongoose.Schema({



    //nesne olarak tınımlıcaz.
    title:  {type:String,required: "Cannot be empty "},
    comSentence:  {type:String,required: "Cannot be empty "},
    titcomImage:    {type:String,required: "Cannot be empty "},
    blog:     {type:String,required: "Cannot be empty "},
    date:     {type:Date,required: Date.now},

}); 

module.exports =mongoose.model("Blog", blogsemasi);
