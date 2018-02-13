class Engine {
    private _horsePower:string;
    private _engineType:string;
    constructor (horsePower:string, engineType:string ) {
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
    getEngineType(): string {
        return this._engineType;
    }
    setEngineType(value: string) {
        this._engineType = value;
    }

    getHorsePower(): string {
        return this._horsePower;
    }

    setHorsePower(valueHp:string) {
        this._horsePower = valueHp;
    }
}

class Auto {
    private _engine:Engine;
    private _make:string;
    private _model:string;
    private _year:number;

    constructor (engine:Engine , make:string, model: string, year:number) {
        this._engine = engine;
        this._make = make;
        this._model = model;
        this._year = year;
    }

    start() {
        alert('Engine of Type ' + this._engine.getEngineType() + ' ' + this._model + ' started')
    }

    stop() {
        alert('Engine of Type ' + this._engine.getEngineType() + ' ' + this._model + ' stopped')
    }
}

window.onload = function () {
    var engine = new Engine('250','V6');
    var car = new Auto(engine, 'acura','rdx',2014);
    car.start();
    car.stop();
};