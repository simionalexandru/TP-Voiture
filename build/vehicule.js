"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicule = /** @class */ (function () {
    function Vehicule(rent) {
        this._name = "";
        this._fuelCapacity = 0;
        this._nivelFuel = 0;
        this._topSpeed = 0;
        this._consumtion = 0;
        this._distance = 0;
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
    Vehicule.prototype.carHorn = function () {
    };
    Vehicule.prototype.rouler = function () {
        var distanceTraveled = this._distance++;
        var fuelLevel = this._nivelFuel--;
        var timer;
        if (this._nivelFuel > 0) {
            this._nivelFuel = this._nivelFuel - this._consumtion;
            this.rouler();
        }
        else {
            console.log("This vehicule will go for " + distanceTraveled);
        }
    };
    return Vehicule;
}());
exports.Vehicule = Vehicule;
