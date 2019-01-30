import { Vehicule } from "./vehicule";

export class Camion extends Vehicule{

    _remorque:boolean;

    constructor (nameCamion:string, remorque:boolean, rent:boolean){

        super(rent);

        this._remorque = remorque;
        this._name = nameCamion;
        this._fuelCapacity = 200;
        this._nivelFuel = 200;
        this._topSpeed = 150;
        this._consumtion = 20;
        this._distanceParcurs=0;
        this._type = "camion";
        this._klaxon ="BEM BEM sais the truck!!!!";  
    
    }

}