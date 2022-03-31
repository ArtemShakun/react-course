class Auto {
    constructor (brand, model, year, vin) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
    }
    log() {
        console.log(this.brand + ' ' + this.model + ' ' + this.year);
    }
    checkVin() {
        if(this.vin.length < 16) {
            return false;
        }
        return true;
    }
}

class Auto_Fuel extends Auto {
    constructor (brand, model, year, vin, engineСapacity, consumption) {
        super(brand, model, year, vin);
        this.engineСapacity = engineСapacity;
        this.consumption = consumption;
    }
    showFuelConsumption() {
        console.log(this.engineСapacity + ' ' + this.consumption);
    }
}

class Auto_Electric extends Auto {
    constructor (brand, model, year, vin, batteryCapacity) {
        super(brand, model, year, vin);
        this.batteryCapacity = batteryCapacity;
    }
    showBatteryConfig() {
        console.log(this.batteryCapacity)
    }
}

let newCar = new Auto_Fuel('Audi', 'B6', '2020', 'AF12124AEGJ32413', '2л', '100км/ч');
let tesla = new Auto_Electric('Tesla', 'Model X', 2020, 'AF12124AEGJ32413', '100 кВт/ч')

// batteryCapacity
tesla.log();
console.log(tesla.checkVin());
tesla.showBatteryConfig();
newCar.showFuelConsumption()