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

class 
let newCar = new Auto('Audi', 'B6', '2020', 'AF12124AEGJ32413');

newCar.log();
console.log(newCar.checkVin());
