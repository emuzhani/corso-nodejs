let hello:string = "Hello, World!";


let integerNumber:number = 1;
let doublenumber:number = 1.234;


console.log("STAMPA " + hello + " " + integerNumber + "\n");

let miaTupla: [number, string] = [1, "pippo"]; //UNA TUPLA HA SOLO 2 ELEMENTI, DI QUESTO TIPO ED IN QUESTO ORDINE
console.log(miaTupla);


//ENUM, IL NOME DEVE SEMPRE INIZIARE CON LA MAIUSCOLA 
enum Colori{red ="red", green ="green", blue ="blue"};
let color1: Colori = Colori.blue;
console.log(color1);

let anyValue: any; //ANY VALUE TYPE AVAIABLE; CAN BE ASSIGNED TO ANOTHER VAR
anyValue = "papp";

let unknownValue: unknown; //ANY VALUE TYPE AVAIABLE; CANNOT BE ASSIGNED TO ANOTHER VAR
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

const failError = function(message:string){
    throw new Error(message)
}


let object = {
    nome: "Ciao",
    cognome: "Moltociao",
    eta: 12
};

console.log(object.cognome);

for(let i=0; i<5; i++)
{
    console.log(i*4);
}


let miaEta = 59;

switch (miaEta)
{
    case 23: console.log("wawa");
    break;

    case 59: console.log("Behottimo");
    break;

    default: console.log("Ah");
    break;
}

