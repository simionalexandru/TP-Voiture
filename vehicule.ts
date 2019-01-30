export class Vehicule{

    protected _name:string="";
    protected _fuelCapacity:number=0;
    protected _nivelFuel:number = 0;
    protected _topSpeed:number=0;
    protected _consumtion:number=0;
    protected _distanceParcurs:number=0;
    protected _type:string="";
    protected _isRented = false;
    protected _klaxon:string = "";

    constructor(rent:boolean){
        this._isRented = rent;
    }

    get name():string{
        return this._name;
    }

    get topSpeed():number{
        return this._topSpeed;
    }

    get isRented():boolean{
        return this._isRented;
    }

    get consumtion():number{
        return this._consumtion;
    }

    get type():string{
        return this._type;
    }

    get fuelCapacity():number{
        return this._fuelCapacity;
    }

    get nivelFuel():number{
        return this._nivelFuel;
    }

    set type(value:string){
        this._type = value;
    }

    set fuelCapacity(value:number){
        this._fuelCapacity = value;
    }

    set nivelFuel(value:number){
        this._nivelFuel = value;
    }

    affiche_type(){
       console.log(this._type); 
    }

    addFuel(fuelToAdd: number){

        if(fuelToAdd > 0){
            let currentFuelLevel = this._nivelFuel;
            let maxFuelLevel = this._fuelCapacity;
            let missingFuel = maxFuelLevel - currentFuelLevel;
            if(currentFuelLevel < maxFuelLevel && fuelToAdd <= missingFuel ){
                currentFuelLevel =+ fuelToAdd;
                console.log(`You've added ${fuelToAdd} liters. Current fuel level is ${currentFuelLevel}`);
            }else{
                console.log(`We cannot add ${fuelToAdd} liters as it is more than the available capacity of ${maxFuelLevel} liters of the tank.`);
                currentFuelLevel =+ missingFuel;
                console.log(`We have filled the tank. You have now ${currentFuelLevel} liters.`);
                console.log(this._klaxon);
            }

        }else{
            console.log("You cannot remove fuel !!!")
        }

    }

    carHorn(){
       
    }

    rouler()
    {
 
        let timer;
        
        timer= setInterval(()=>
        {




        },1000); 
            
            
            
            
            
            


    }


}
