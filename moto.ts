import { Vehicule } from "./vehicule";

export class Moto extends Vehicule{

    _seatbelt:boolean;
    
    constructor (nameMoto:string, seatbelt:boolean, rent:boolean){

        super(rent);

        this._name = nameMoto;
        this._fuelCapacity = 30;
        this._nivelFuel = 30;
        this._topSpeed = 200;
        this._consumtion = 5;
        this._distanceParcurs = 0;
        this._type = "moto";  
        this._seatbelt = seatbelt;
        this._klaxon ="TIT TIT sais the moto!!!!";

    }
}