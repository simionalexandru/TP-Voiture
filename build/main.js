"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var voiture_1 = require("./voiture");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var testVoiture = new voiture_1.Voiture("Porsche", true, false);
console.log("This is a " + testVoiture.name + " test " + testVoiture.type + ". Its fuel tank is " + testVoiture.fuelCapacity + ", top speed " + testVoiture.topSpeed + " \nand it has a consumption of " + testVoiture.consumtion + "L/100km. \nRadio: " + testVoiture._radioCar + "\nRented: " + testVoiture.isRented);
var testMoto = new moto_1.Moto("Suzuki", false, false);
console.log("This is a " + testMoto.name + " test " + testMoto.type + ". Its fuel tank is " + testMoto.fuelCapacity + ", top speed " + testMoto.topSpeed + " \nand it has a consumption of " + testMoto.consumtion + "L/100km. \nSeatbelt: " + testMoto._seatbelt + "\nRented: " + testMoto.isRented);
var testCamion = new camion_1.Camion("MAN", true, true);
console.log("This is a " + testCamion.name + " test " + testCamion.type + ". Its fuel tank is " + testCamion.fuelCapacity + ", top speed " + testCamion.topSpeed + " \nand it has a consumption of " + testCamion.consumtion + "L/100km. \nRadio: " + testCamion._remorque + "\nRented: " + testCamion.isRented);
// console.log(testCamion.type);
// testMoto.affiche_type();
// testMoto.addFuel(50);
// We make a schema with who will get what
var players = [
    { player_name: "John", type_vehicule: "voiture" },
    { player_name: "Mark", type_vehicule: "camion" },
    { player_name: "Dan", type_vehicule: "moto" }
];
var vehiculesEnCourse = [];
// We actually create the vehicules that will be distributed
for (var i = 0; i < players.length; i++) {
    if (players[i].type_vehicule === "voiture") {
        vehiculesEnCourse[i] = new voiture_1.Voiture(players[i].player_name, true, false);
    }
    else if (players[i].type_vehicule === "camion") {
        vehiculesEnCourse[i] = new camion_1.Camion(players[i].player_name, true, true);
    }
    else {
        vehiculesEnCourse[i] = new moto_1.Moto(players[i].player_name, false, false);
    }
}
//let johnVehicle = players.filter(players => player_name = "John" )
var Gigi = new voiture_1.Voiture("toyota", true, true);
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
