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
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(nameCamion, remorque, rent) {
        var _this = _super.call(this, rent) || this;
        _this._remorque = remorque;
        _this._name = nameCamion;
        _this._fuelCapacity = 200;
        _this._nivelFuel = 200;
        _this._topSpeed = 150;
        _this._consumtion = 20;
        _this._distanceParcurs = 0;
        _this._type = "camion";
        _this._klaxon = "BEM BEM sais the truck!!!!";
        return _this;
    }
    return Camion;
}(vehicule_1.Vehicule));
exports.Camion = Camion;
