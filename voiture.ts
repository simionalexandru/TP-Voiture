import { Vehicule } from "./vehicule";

export class Voiture extends Vehicule{
    _radioCar:boolean;


    constructor (nameCar:string, radioCar:boolean, rent:boolean){

        super(rent);

        this._name = nameCar;
        this._fuelCapacity = 50;
        this._nivelFuel = 0.5;
        this._topSpeed = 200;
        this._consumtion = 10;
        this._distanceParcurs = 0;
        this._type = "voiture";  
        this._radioCar = radioCar;
        this._klaxon ="BIP BIP sais the car!!!!";
    }


}