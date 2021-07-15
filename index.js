//nodejs eklentileri oluşturma package.json verilerini kullanırız.
const mongoose=require('mongoose');
const express= require("express");
const bodyParser=require("body-parser");
//Mongo db için gerekli express modüllerini bağladık. 
const passport=require("passport");
const LocalStrategy=require("passport-local");
const expressSession = require('express-session');
const User=require('./models/userModel');
const app=express();






//Routes
const indexRoutes=require("./routes/indexRoutes");
const adminRoutes=require("./routes/adminRoutes");

// App Config: bunlar nedir araştır. AYarlar ve konfigürasyon ekleme

mongoose.connect('mongodb://localhost/NodejsBlog');
app.set('view engine', 'ejs');
app.use(express.static('public'));
// bodyaparseri app config yapıcaz.
app.use(bodyParser.urlencoded({extended:true}));




// Passwordconfig
app.use(require("express-session")({

    secret:"Güvenlik Cümlesi",
    resave:false,
    saveUninitialized:false

}));
// Parola giriş için modüller ve özellikler dahil edildi özet olarak bu kadar.
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Router Using

app.use(indexRoutes);
app.use(adminRoutes);

// 3000 portuna callback fonksiyonu ile erişmek. herhangi bir değeri böyle oluşturabilririz.
// fonksiyon oluşturduğumuz için err parametresi vererek err in varlığı ve yokluğunu öğrenebiliriz.
const server=app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        // Konsola adres portunu bastırma konsolda adresin prt numarasını göstericez
        console.log('App başladı, Port number %d :',server.address().port);
    }


});


             