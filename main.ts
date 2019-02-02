import {Vehicule} from "./vehicule";
import {Voiture} from "./voiture";
import {Moto} from "./moto";
import {Camion} from "./camion";



var testVoiture =  new Voiture("Porsche", true, false);
console.log(`This is a ${testVoiture.name} test ${testVoiture.type}. Its fuel tank is ${testVoiture.fuelCapacity}, top speed ${testVoiture.topSpeed} 
and it has a consumption of ${testVoiture.consumtion}L/100km. 
Radio: ${testVoiture._radioCar}
Rented: ${testVoiture.isRented}` );

var testMoto =  new Moto("Suzuki", false, false);
console.log(`This is a ${testMoto.name} test ${testMoto.type}. Its fuel tank is ${testMoto.fuelCapacity}, top speed ${testMoto.topSpeed} 
and it has a consumption of ${testMoto.consumtion}L/100km. 
Seatbelt: ${testMoto._seatbelt}
Rented: ${testMoto.isRented}` );

var testCamion =  new Camion("MAN", true, true);
console.log(`This is a ${testCamion.name} test ${testCamion.type}. Its fuel tank is ${testCamion.fuelCapacity}, top speed ${testCamion.topSpeed} 
and it has a consumption of ${testCamion.consumtion}L/100km. 
Radio: ${testCamion._remorque}
Rented: ${testCamion.isRented}` );

// console.log(testCamion.type);
// testMoto.affiche_type();

// testMoto.addFuel(50);
// We make a schema with who will get what
let players = [
{player_name: "John", type_vehicule: "voiture"}, 
{player_name: "Mark", type_vehicule: "camion"} ,
{player_name: "Dan", type_vehicule: "moto"} ]; 

let vehiculesEnCourse = [];

// We actually create the vehicules that will be distributed

for(let i=0; i<players.length; i++){
    if(players[i].type_vehicule === "voiture"){
        vehiculesEnCourse[i] = new Voiture(players[i].player_name, true, false)
    }else if(players[i].type_vehicule === "camion"){
        vehiculesEnCourse[i] = new Camion(players[i].player_name, true, true)
    }else{
        vehiculesEnCourse[i] = new Moto(players[i].player_name, false, false)
    }
}

//let johnVehicle = players.filter(players => player_name = "John" )

let Gigi = new Voiture("toyota", true, true);

Gigi.rouler();






























// function randomVehicle():string{
//     let randomNumber = Math.floor(Math.random() * 3) + 1;
//     if(randomNumber == 1){
//         return "voiture";
//     }
//     else if(randomNumber == 2){
//         return "moto";
//     }
//     else{
//         return "camion";
//     }
// }

// for(var i = 0; i < players.length; i++){
//     vehiculesEnCourse[i] = createVehicle(i, players[i], randomVehicle());
// }

// function createVehicle(Index:number, player:string, vehiculeType:string ){

//     if(vehiculeType == "voiture"){
        
//     }
// }
