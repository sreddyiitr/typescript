class EngineEx {
    private _horsePower:string;
    private _engineType:string;
    constructor (horsePower:string, engineType:string ) {
        this._horsePower = horsePower;
        this._engineType = engineType;
    }

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

class Accessory {
    constructor (public serial:number, public name:string) {
    }
}

class AutoEx {
    private _engine:EngineEx;
    private _make:string;
    private _model:string;
    private _year:number;
    private _accessoryList:string;

    constructor (engine:EngineEx , make:string, model: string, year:number, accessoryList:string) {
        this._engine = engine;
        this._make = make;
        this._model = model;
        this._year = year;
        this._accessoryList = accessoryList;
    }

    addAccessoryList(...accessrories:Accessory[]) {
        this._accessoryList = '';        
        accessrories.forEach(accessory => {
            this._accessoryList  += ' accessory serial: ' + accessory.serial + ' accesory name: ' + accessory.name;
        });
    }

    get accessoryList():string {
        return this._accessoryList;
    }

    start() {
        alert('Engine of Type ' + this._engine.getEngineType() + ' ' + this._model + ' started')
    }

    stop() {
        alert('Engine of Type ' + this._engine.getEngineType() + ' ' + this._model + ' stopped')
    }
}

class TruckEx extends AutoEx {
    private _bedType:string;
    private _isClosedTrunk:boolean;

    //Look at public basePrice.. this doesnt need to be declared before constructor
    constructor (engine:EngineEx , make:string, model: string, year:number, 
        bedType:string, isClosedTrunk:boolean, public basePrice:number) {
        //super should be called
        super(engine , make, model, year, '');
        this._bedType = bedType;
        this._isClosedTrunk = isClosedTrunk;
        if(basePrice === undefined || basePrice === 0) throw 'base price should be valid'
    }

    get bedType():string {
        return this._bedType;
    }

    set bedType(value:string) {
        if(value === undefined) throw 'provide bedtype for truck'
        this._bedType = value;
    }

    getIsClosedTrunk():boolean {
        return this._isClosedTrunk;
    }

    setIsClosedTrunk(value:boolean) {
        this._isClosedTrunk = value;
    }

    calcTotalPrice(taxPercent:number) : number {
        return  this.basePrice * (1 + taxPercent / 100);
    }

}

window.onload = function () {
    var engineEx = new EngineEx('250','V6');
    var truckEx = new TruckEx(engineEx, 'Chevy', 'Silverado', 2015, 'long', false, 20000);
    truckEx.addAccessoryList(new Accessory(1, 'Tech Package'), new Accessory(2, 'Moon Roof'));
    //document.writeln("Hey I am here")
    alert('Total Price of Truck: ' + truckEx.calcTotalPrice(8.5));
    alert('Accessories on this Truck: ' + truckEx.accessoryList);
};