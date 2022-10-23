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
    res.render('mekanbilgisi', 
    { baslik: 'Mekan Bilgisi', 
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
        "ad":"Starbucks",
        "puan":"3",
        "adres":"Centrum Garden AVM",
        "saatler":[
            {
                "gunler":"Pazartesi-Cuma",
                "acilis":"9:00",
                "kapanis":"23:00",
                "kapali":false
            },
            {
                "gunler":"Cumartesi-Pazar",
                "acilis":"8:00",
                "kapanis":"22:00",
                "kapali":false
            }
        ],
        "imkanlar":["Kahve","Cay","Kek"],
        "koordinatlar":{
            "enlem":"37.7",
            "boylam":"30.5"
        },
        "yorumlar":[
            {
                "yorumYapan":"Melih Sinan Acikgoz",
                "yorumMetni":"Berbatti!",
                "tarih":"20 Ekim 2022",
                "puan":"1"
            },
            {
                "yorumYapan":"Ali Cetin",
                "yorumMetni":"Super!",
                "tarih":"20 Ekim 2022",
                "puan":"5"
            }
        ]

    }


});
};

const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
};

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}
