class Auto {
    constructor (brand, model, year, vin) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
    }
    log() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
    checkVin() {
        console.log(this.vin.length === 16);
    }
};

class Auto_Fuel extends Auto {
    constructor (brand, model, year, vin, engineСapacity, consumption) {
        super(brand, model, year, vin);
        this.engineСapacity = engineСapacity;
        this.consumption = consumption;
    }
    showFuelConsumption() {
        console.log(`Engine capacity: ${this.engineСapacity}, Consumption: ${this.consumption}`);
    }
};

class Auto_Electric extends Auto {
    constructor (brand, model, year, vin, batteryCapacity) {
        super(brand, model, year, vin);
        this.batteryCapacity = batteryCapacity;
    }
    showBatteryConfig() {
        console.log(this.batteryCapacity);
    }
};

let newCar = new Auto_Fuel('Audi', 'B6', '2020', 'AF12124AEGJ32413', '2л', '100км/ч');
let tesla = new Auto_Electric('Tesla', 'Model X', '2020', 'AF12124AEGJ34139', '100 кВт/ч');

tesla.log();
tesla.checkVin();
tesla.showBatteryConfig();
newCar.log();
newCar.showFuelConsumption();