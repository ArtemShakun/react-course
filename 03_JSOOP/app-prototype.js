function Auto (...args) {
    const [brand, model, year, vin] = args;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.vin = vin;
};

Auto.prototype.log = function() {console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`)};
Auto.prototype.checkVin = function() {console.log(this.vin.length === 16)};

function Auto_Fuel(...args) {
    Auto.apply(this, args);
    const [,,,, engineСapacity, consumption] = args;
    this.engineСapacity = engineСapacity;
    this.consumption = consumption;
};

Auto_Fuel.prototype = Object.create(Auto.prototype);

Auto_Fuel.prototype.showFuelConsumption = function() {console.log(`Engine capacity: ${this.engineСapacity}, Consumption: ${this.consumption}`)};

function Auto_Electric(...args) {
    Auto.apply(this, args);
    const [,,,, batteryCapacity] = args;
    this.batteryCapacity = batteryCapacity;
};

Auto_Electric.prototype = Object.create(Auto.prototype);
Auto_Electric.prototype.showBatteryConfig = function() {console.log(this.batteryCapacity)};

let newCar = new Auto_Fuel('Audi', 'B6', '2020', 'AF12124AEGJ32413', '2л', '100км/ч');
let tesla = new Auto_Electric('Tesla', 'Model X', '2020', 'AF12124AEGJ34139', '100 кВт/ч')

// batteryCapacity
tesla.log();
tesla.checkVin();
tesla.showBatteryConfig();
newCar.log();
newCar.showFuelConsumption();