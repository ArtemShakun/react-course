function Auto (params) {
    this.brand = params.brand;
    this.model = params.model;
    this.year = params.year;
    this.vin = params.vin;
}

Auto.prototype.log = function() {
    console.log(this.brand + ' ' + this.model + ' ' + this.year);
}
Auto.prototype.checkVin = function() {
    if(this.vin.length < 16) {
        return false;
    }
    return true;
};

function Auto_Fuel(params) {
    Auto.apply(this, arguments);
    this.engineСapacity = params.engineСapacity;
    this.consumption = params.consumption;
}
Auto_Fuel.prototype = Object.create(Auto.prototype);

Auto_Fuel.prototype.showFuelConsumption = function() {
    console.log(this.engineСapacity + ' ' + this.consumption);
}

function Auto_Electric(params) {
    Auto.apply(this, arguments);
    this.batteryCapacity = params.batteryCapacity;
}

Auto_Electric.prototype = Object.create(Auto.prototype);
Auto_Electric.prototype.showBatteryConfig = function() {
    console.log(this.batteryCapacity);
}

// let newCar = new Auto_Fuel({brand:'Audi', model:'B6', year:'2020', vin:'AF12124AEGJ32413', engineСapacity:'2л', consumption:'100км/ч'});
let tesla = new Auto_Electric({brand:'Tesla', model:'Model X', year:'2020', vin:'AF12124AEGJ32413', batteryCapacity:'100 кВт/ч'})
tesla.log();
console.log(tesla.checkVin());
tesla.showBatteryConfig();