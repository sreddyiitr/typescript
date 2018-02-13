"use strict";
var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this._horsePower = horsePower;
        this._engineType = engineType;
    }
    /* //The following doesnt work in ES3 target. because old browsers IE7/8 do not support properties
    get horsePower() {
        return this._horsePower;
    }

    set horsePower(value:string) {
        if(value === undefined) throw 'pass horsepower value';
        this._horsePower = horsepower;
    }
    */
    Engine.prototype.getEngineType = function () {
        return this._engineType;
    };
    Engine.prototype.setEngineType = function (value) {
        this._engineType = value;
    };
    Engine.prototype.getHorsePower = function () {
        return this._horsePower;
    };
    Engine.prototype.setHorsePower = function (valueHp) {
        this._horsePower = valueHp;
    };
    return Engine;
}());
var Auto = /** @class */ (function () {
    function Auto(engine, make, model, year) {
        this._engine = engine;
        this._make = make;
        this._model = model;
        this._year = year;
    }
    Auto.prototype.start = function () {
        alert('Engine of Type ' + this._engine.getEngineType() + ' ' + this._model + ' started');
    };
    Auto.prototype.stop = function () {
        alert('Engine of Type ' + this._engine.getEngineType() + ' ' + this._model + ' stopped');
    };
    return Auto;
}());
window.onload = function () {
    var engine = new Engine('250', 'V6');
    var car = new Auto(engine, 'acura', 'rdx', 2014);
    car.start();
    car.stop();
};
//# sourceMappingURL=C:/Sunil/Education/Typescript/Class/scripts/Example1.js.map