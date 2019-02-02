"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicule = /** @class */ (function () {
    function Vehicule(rent) {
        this._name = "";
        this._fuelCapacity = 0;
        this._nivelFuel = 0;
        this._topSpeed = 0;
        this._currentSpeed = 0;
        this._consumtion = 0;
        this._distanceParcurs = 0;
        this._type = "";
        this._isRented = false;
        this._klaxon = "";
        this._isRented = rent;
    }
    Object.defineProperty(Vehicule.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "topSpeed", {
        get: function () {
            return this._topSpeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "isRented", {
        get: function () {
            return this._isRented;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "consumtion", {
        get: function () {
            return this._consumtion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "fuelCapacity", {
        get: function () {
            return this._fuelCapacity;
        },
        set: function (value) {
            this._fuelCapacity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "nivelFuel", {
        get: function () {
            return this._nivelFuel;
        },
        set: function (value) {
            this._nivelFuel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "currentSpeed", {
        get: function () {
            return this._currentSpeed;
        },
        set: function (value) {
            this._currentSpeed = value;
        },
        enumerable: true,
        configurable: true
    });
    Vehicule.prototype.affiche_type = function () {
        console.log(this._type);
    };
    Vehicule.prototype.addFuel = function (fuelToAdd) {
        if (fuelToAdd > 0) {
            var currentFuelLevel = this._nivelFuel;
            var maxFuelLevel = this._fuelCapacity;
            var missingFuel = maxFuelLevel - currentFuelLevel;
            if (currentFuelLevel < maxFuelLevel && fuelToAdd <= missingFuel) {
                currentFuelLevel = +fuelToAdd;
                console.log("You've added " + fuelToAdd + " liters. Current fuel level is " + currentFuelLevel);
            }
            else {
                console.log("We cannot add " + fuelToAdd + " liters as it is more than the available capacity of " + maxFuelLevel + " liters of the tank.");
                currentFuelLevel = +missingFuel;
                console.log("We have filled the tank. You have now " + currentFuelLevel + " liters.");
                console.log(this._klaxon);
            }
        }
        else {
            console.log("You cannot remove fuel !!!");
        }
    };
    Vehicule.prototype.consummingMethod = function () {
        if (this.currentSpeed > 0 && this.currentSpeed < 50) {
            return this._consumtion = this._consumtion / 2;
        }
        else if (this.currentSpeed > 50 && this.currentSpeed < 100) {
            return this._consumtion = this._consumtion / 1.5;
        }
        else {
            return this._consumtion = this._consumtion;
        }
    };
    //This method will drive the car until we are out of gas.
    //The method will influence the distance traveled and the consumtion 
    Vehicule.prototype.rouler = function () {
        var _this = this;
        var timer = 20;
        timer = setInterval(function () {
            _this._currentSpeed = _this._currentSpeed + _this.accelerate();
            _this._consumtion = _this.consummingMethod();
            _this._nivelFuel = _this.currentFuelLevelMethod();
            _this._distanceParcurs = _this.distanceTraveledPerSecond();
            _this.showInfoMethod();
        }, 1000);
    };
    Vehicule.prototype.currentFuelLevelMethod = function () {
        var consumtionPerSecond = this._consumtion / 3600;
        return this._nivelFuel = this._nivelFuel - consumtionPerSecond;
    };
    Vehicule.prototype.distanceTraveledPerSecond = function () {
        var distanceTraveledPerSecond = this._currentSpeed / 3600;
        return distanceTraveledPerSecond;
    };
    Vehicule.prototype.accelerate = function () {
        if (this._currentSpeed < this._topSpeed) {
            return 20;
        }
        else {
            return 0;
        }
    };
    Vehicule.prototype.showInfoMethod = function () {
        console.log("Distance traveled: " + this._distanceParcurs);
        console.log("Current speed: " + this._currentSpeed);
        console.log("Fuel level: " + this._nivelFuel);
        console.log("Current consumtion: " + this._consumtion);
    };
    return Vehicule;
}());
exports.Vehicule = Vehicule;
