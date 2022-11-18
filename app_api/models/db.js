require("./mekansema");
var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/mekanbul';
//var dbURI = 'mongodb+srv://sinan:1234@mekanbul.oliqerj.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI);
mongoose.connection.on("connected", function(){
    console.log(dbURI+" adresindeki veritabanina baglanildi!\n");
});
mongoose.connection.on("error", function(){
    console.log("Baglanti hatasi!\n");
});
mongoose.connection.on("disconnected", function(){
    console.log(dbURI+" adresindeki veritabani baglantisi koptu!\n");
});
function kapat(msg, callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });
}
process.on("SIGINT", function(){
    kapat("Uygulama kapatildi!", function(){
        process.exit(0);
    });
});