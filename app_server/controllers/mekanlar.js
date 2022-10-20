var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res, next) {
    res.render('anasayfa', 
    { baslik: 'Anasayfa',
    "sayfaBaslik": {
        "siteAd":"MekanBul",
        "slogan":"Civardaki Mekanlari Kesfet!"
    },
    "mekanlar":[
        {
            "ad":"Starbucks",
            "puan":"3",
            "adres":"Centrum Garden AVM",
            "imkanlar":["Kahve","Cay","Kek"],
            "mesafe":"10Km"
        },
        {
            "ad":"Kahve Dunyasi",
            "puan":"5",
            "adres":"Iyas Park AVM",
            "imkanlar":["Kahve","Cay","Kek"],
            "mesafe":"8Km"
        },
    ] 
    
});
};

const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi', { title: 'Mekan Bilgisi' });
};

const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
};

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}
