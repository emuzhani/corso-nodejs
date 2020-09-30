var hello = "Hello, World!";
var integerNumber = 1;
var doublenumber = 1.234;
console.log("STAMPA " + hello + " " + integerNumber + "\n");
var miaTupla = [1, "pippo"]; //UNA TUPLA HA SOLO 2 ELEMENTI, DI QUESTO TIPO ED IN QUESTO ORDINE
console.log(miaTupla);
//ENUM, IL NOME DEVE SEMPRE INIZIARE CON LA MAIUSCOLA 
var Colori;
(function (Colori) {
    Colori["red"] = "red";
    Colori["green"] = "green";
    Colori["blue"] = "blue";
})(Colori || (Colori = {}));
;
var color1 = Colori.blue;
console.log(color1);
var anyValue; //ANY VALUE TYPE AVAIABLE; CAN BE ASSIGNED TO ANOTHER VAR
anyValue = "papp";
var unknownValue; //ANY VALUE TYPE AVAIABLE; CANNOT BE ASSIGNED TO ANOTHER VAR
unknownValue = false;
/*
const segno = function(){
    while(true)
    {
        console.log("pippo");
        console.log("pluto");
        console.log("paperino");

    }
}
*/
var failError = function (message) {
    throw new Error(message);
};
var object = {
    nome: "Ciao",
    cognome: "Moltociao",
    eta: 12
};
console.log(object.cognome);
for (var i = 0; i < 5; i++) {
    console.log(i * 4);
}
var miaEta = 59;
switch (miaEta) {
    case 23:
        console.log("wawa");
        break;
    case 59:
        console.log("Behottimo");
        break;
    default:
        console.log("Ah");
        break;
}
