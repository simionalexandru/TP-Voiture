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
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(nameMoto, seatbelt, rent) {
        var _this = _super.call(this, rent) || this;
        _this._name = nameMoto;
        _this._fuelCapacity = 30;
        _this._nivelFuel = 30;
        _this._topSpeed = 200;
        _this._consumtion = 5;
        _this._distanceParcurs = 0;
        _this._type = "moto";
        _this._seatbelt = seatbelt;
        _this._klaxon = "TIT TIT sais the moto!!!!";
        return _this;
    }
    return Moto;
}(vehicule_1.Vehicule));
exports.Moto = Moto;
