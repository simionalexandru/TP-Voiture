"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var vehicule_1 = require("./vehicule");
var Voiture = /** @class */ (function (_super) {
    __extends(Voiture, _super);
    function Voiture(nameCar, radioCar, rent) {
        var _this = _super.call(this, rent) || this;
        _this._name = nameCar;
        _this._fuelCapacity = 50;
        _this._nivelFuel = 0.5;
        _this._topSpeed = 200;
        _this._consumtion = 10;
        _this._distanceParcurs = 0;
        _this._type = "voiture";
        _this._radioCar = radioCar;
        _this._klaxon = "BIP BIP sais the car!!!!";
        return _this;
    }
    return Voiture;
}(vehicule_1.Vehicule));
exports.Voiture = Voiture;
