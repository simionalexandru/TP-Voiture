export class Vehicule{

    protected _name:string="";
    protected _fuelCapacity:number=0;
    protected _nivelFuel:number = 0;
    protected _topSpeed:number=0;
    protected _currentSpeed:number=0;
    protected _consumtion:number=0;
    protected _distanceParcurs:number=0;
    protected _type:string="";
    protected _isRented:boolean = false;
    protected _klaxon:string = "";
    protected timer:any;
    protected refil:any;

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

    get currentSpeed():number{
        return this._currentSpeed;
    }

    set currentSpeed(value:number){
        this._currentSpeed = value;
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

    consummingMethod(){
       if(this.currentSpeed > 0 && this.currentSpeed <= 50){
            return this._consumtion = this._consumtion/2 
       } else if(this.currentSpeed > 50 && this.currentSpeed <= 100) {
            return this._consumtion = this._consumtion/1.5
       }else{
           return this._consumtion;
       }
    }

    //This method will drive the car until we are out of gas.
    //The method will influence the distance traveled and the consumtion 
    rouler(){

            this.timer= setInterval((()=>{
            
            if(this._nivelFuel<0){
                clearInterval(this.timer);
                console.log("We are out of fuel");
                
            }else{
                this._nivelFuel = this.currentFuelLevelMethod();
                this._currentSpeed = this._currentSpeed + this.accelerate();
                this._consumtion = this.consummingMethod();
            }
            
            this._distanceParcurs = this._distanceParcurs + this.distanceTraveledPerSecond();
            this.showInfoMethod();

            }), 1000);         
             
            
    }

    currentFuelLevelMethod(){

        let consumtionPerSecond = this._consumtion/3600;
        return this._nivelFuel = this._nivelFuel - consumtionPerSecond;
    }

    distanceTraveledPerSecond(){
        let distanceTraveledPerSecond =   this._currentSpeed/3600;
        return distanceTraveledPerSecond;
    }

    accelerate(){
        if(this._currentSpeed < this._topSpeed){
            return 20;
        }else{
            return 0;
        }
    }

    showInfoMethod(){
        console.log("Distance traveled: " + this._distanceParcurs);
        console.log("Current speed: " + this._currentSpeed);
        console.log("Fuel level: " + this._nivelFuel);
        console.log("Current consumtion: " + this.consummingMethod());
    }


}
