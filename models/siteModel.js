const mongoose= require("mongoose");

const sitesemasi=new mongoose.Schema({



    //nesne olarak tınımlıcaz.
    homeimage:  {type:String,required: "Cannot be empty "},
    aboutimage:  {type:String,required: "Cannot be empty "},
    abouttext:    {type:String,required: "Cannot be empty "},
    contactimage:     {type:String,required: "Cannot be empty "},
    contacttext:     {type:String,required: "Cannot be empty "},

}); 

module.exports =mongoose.model("Site", sitesemasi);