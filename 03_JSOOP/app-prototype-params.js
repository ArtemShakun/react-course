function Auto (params) {
    this.brand = params.brand;
    this.model = params.model;
    this.year = params.year;
    this.vin = params.vin;
};

Auto.prototype.log = function() {console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`)};
Auto.prototype.checkVin = function() {console.log(this.vin.length === 16)};

function Auto_Fuel(params) {
    Auto.apply(this, arguments);
    this.engineСapacity = params.engineСapacity;
    this.consumption = params.consumption;
};

Auto_Fuel.prototype = Object.create(Auto.prototype);
Auto_Fuel.prototype.showFuelConsumption = function() {console.log(`Engine capacity: ${this.engineСapacity}, Consumption: ${this.consumption}`)};

function Auto_Electric(params) {
    Auto.apply(this, arguments);
    this.batteryCapacity = params.batteryCapacity;
};

Auto_Electric.prototype = Object.create(Auto.prototype);
Auto_Electric.prototype.showBatteryConfig = function() {console.log(this.batteryCapacity)};

let car = new Auto_Fuel({brand: 'Audio', model:'B6', year:'2020', vin:'AF12124AEGJ32413', engineСapacity:'2Л', consumption:'10л/100 км'});
// let tesla = new Auto_Electric({brand: 'Tesla', model:'Model X', year:'2020', vin:'AF12124AEGJ32413', batteryCapacity:'100 кВт/ч'});

// tesla.showBatteryConfig();
car.log();
car.checkVin();
car.showFuelConsumption();