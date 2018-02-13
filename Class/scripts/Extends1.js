"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EngineEx = /** @class */ (function () {
    function EngineEx(horsePower, engineType) {
        this._horsePower = horsePower;
        this._engineType = engineType;
    }
    EngineEx.prototype.getEngineType = function () {
        return this._engineType;
    };
    EngineEx.prototype.setEngineType = function (value) {
        this._engineType = value;
    };
    EngineEx.prototype.getHorsePower = function () {
        return this._horsePower;
    };
    EngineEx.prototype.setHorsePower = function (valueHp) {
        this._horsePower = valueHp;
    };
    return EngineEx;
}());
var Accessory = /** @class */ (function () {
    function Accessory(serial, name) {
        this.serial = serial;
        this.name = name;
    }
    return Accessory;
}());
var AutoEx = /** @class */ (function () {
    function AutoEx(engine, make, model, year, accessoryList) {
        this._engine = engine;
        this._make = make;
        this._model = model;
        this._year = year;
        this._accessoryList = accessoryList;
    }
    AutoEx.prototype.addAccessoryList = function () {
        var _this = this;
        var accessrories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessrories[_i] = arguments[_i];
        }
        this._accessoryList = '';
        accessrories.forEach(function (accessory) {
            _this._accessoryList += 'accessory serial: ' + accessory.serial + ' accesory name: ' + accessory.name;
        });
    };
    Object.defineProperty(AutoEx.prototype, "accessoryList", {
        get: function () {
            return this._accessoryList;
        },
        enumerable: true,
        configurable: true
    });
    AutoEx.prototype.start = function () {
        alert('Engine of Type ' + this._engine.getEngineType() + ' ' + this._model + ' started');
    };
    AutoEx.prototype.stop = function () {
        alert('Engine of Type ' + this._engine.getEngineType() + ' ' + this._model + ' stopped');
    };
    return AutoEx;
}());
var TruckEx = /** @class */ (function (_super) {
    __extends(TruckEx, _super);
    //Look at public basePrice.. this doesnt need to be declared before constructor
    function TruckEx(engine, make, model, year, bedType, isClosedTrunk, basePrice) {
        var _this = 
        //super should be called
        _super.call(this, engine, make, model, year, '') || this;
        _this.basePrice = basePrice;
        _this._bedType = bedType;
        _this._isClosedTrunk = isClosedTrunk;
        if (basePrice === undefined || basePrice === 0)
            throw 'base price should be valid';
        return _this;
    }
    Object.defineProperty(TruckEx.prototype, "bedType", {
        get: function () {
            return this._bedType;
        },
        set: function (value) {
            if (value === undefined)
                throw 'provide bedtype for truck';
            this._bedType = value;
        },
        enumerable: true,
        configurable: true
    });
    TruckEx.prototype.getIsClosedTrunk = function () {
        return this._isClosedTrunk;
    };
    TruckEx.prototype.setIsClosedTrunk = function (value) {
        this._isClosedTrunk = value;
    };
    TruckEx.prototype.calcTotalPrice = function (taxPercent) {
        return this.basePrice * (1 + taxPercent / 100);
    };
    return TruckEx;
}(AutoEx));
window.onload = function () {
    var engineEx = new EngineEx('250', 'V6');
    var truckEx = new TruckEx(engineEx, 'Chevy', 'Silverado', 2015, 'long', false, 20000);
    truckEx.addAccessoryList(new Accessory(1, 'Tech Package'), new Accessory(2, 'Moon Roof'));
    //document.writeln("Hey I am here")
    alert('Total Price of Truck: ' + truckEx.calcTotalPrice(8.5));
    alert('Accessories on this Truck: ' + truckEx.accessoryList);
};
//# sourceMappingURL=C:/Sunil/Education/Typescript/Class/scripts/Extends1.js.map