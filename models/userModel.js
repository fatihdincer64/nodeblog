const mongoose= require('mongoose');
// Password kontrolü package
const passportLocalMongoose= require('passport-local-mongoose');


// Mongoo dan şema oluşturmaya yarar 
const userseması=new mongoose.Schema({

    username:String,
    password:String





});

// modülü dahil ettik şemaya. Dışarıdan ekstra alınan passportmongoose ile ekstra bir modülü entregre ettik.
userseması.plugin(passportLocalMongoose);

// Mongoose modelini dahil User isimli user şemasını export yani dışarıya aktarımını sağladık.
module.exports=mongoose.model("User",userseması);
