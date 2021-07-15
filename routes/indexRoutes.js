const express= require('express');

// router ile yönlendirme sağlanır. 
const router= express.Router();
// router kimlik atamamızısağlar.  ip vermek gibi düşün.
//Veri tabanından blogları çekmeden önce dizilerle deneme.
// Ana router home a göndermeye çalışıcaz. Nesne oluşturup atmaya çalışıcaz.
let data= [
    {
    postTitle:"Blog Denemesi",
    postSubTitle:"Bu ilk blog denemesi",
    image:"https://cdn.pixabay.com/photo/2021/07/09/17/10/eye-6399571_960_720.jpg"
},
{
    postTitle:"Blog Deneme",
    postSubTitle:"Blog denemesine denk geldiniz",
    image:"https://cdn.pixabay.com/photo/2020/12/23/17/24/cat-5855647_960_720.jpg"
},
{
    postTitle:"Kahve Keyfi",
    postSubTitle:"Kahve dünyanın en güzel iceceklerinden biridir",
    image:"https://cdn.pixabay.com/photo/2021/06/28/10/15/coffee-6371149_960_720.jpg"
}

]


//Dinleme yapıyoruz router ile get ile http isteği gönderdik
router.get('/',(req,res)=>{

    // Fİle render edicez çalıştırcaz
    // Home tarafına nesne olarak gönderme sağlayacaz.
    //2. data let ile tanımlanan 1. data alınacak değer.
    res.render('home',{data : data});




});
// About Yönlendirme
router.get('/about',(req,res)=>{

    // Fİle render edicez çalıştırcaz
    res.render('about');





});


// Contact Yönlendirme
router.get('/contact',(req,res)=>{

    // Fİle render edicez çalıştırcaz
    res.render('contact');


});



router.get('/cv',(req,res)=>{

    // Fİle render edicez çalıştırcaz
    res.render('cv');





});

// routeri dahil etme anlamına gelir ezber kod. 
module.exports=router;