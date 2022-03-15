// console.table(countries);

function getAveragePopulation(countries) {
    var averagePopulation = countries.reduce((acc, currentValue) => acc + currentValue.population, 0) / (countries.length || 1);
    return averagePopulation.toFixed(2);

        //в каждой стране есть поле population, вернуть из функции среднее арифм.
};

function getNames(countries) {
    var arrayCountriesName = [];
    countries.map(country => arrayCountriesName.push(country.name));
    return arrayCountriesName;

    //вернуть список (массив) имен стран (поле name)
};

function findCountry(countries) {
    var countryName = prompt('Enter country name:').toLowerCase();
    var arrayCountriesName = getNames(countries);
    return (arrayCountriesName.find(country => country.toLowerCase() === countryName)) ? true : false;
    // return arrayCountriesName.includes(countryName); in this case we need to remove method toLowerCase() in variable countryName;

    //ввод через prompt название страны, вернуть true если такая страна нашлась по имени, false если не нашлась. можно использовать для этого getNames выше + indexOf
};

function getCountryByCode(countries) {
    var countryCode = prompt('Enter country code: ').toUpperCase();

    if (countryCode.length === 3) {
        const isCountry = countries.filter(country => country.alpha3Code === countryCode);
        if (isCountry.length === 0) {
            return false
        }
        return isCountry;
    }
    return 'Error! Your code invalid !!!';

    //пользователь вводит через prompt трехбуквенный код. если введенная строка не 3 символа длиной - выдать сообщение о неправильном вводе.
    //по введенной строке (трехбуквенный код) найти страну (должно совпадать с alpha3Code, которое есть у каждой страны).
    //и вернуть из функции либо объект с найденной страной, либо false
};

//Удачи.

// console.log(getAveragePopulation(countries));
// console.log(getNames(countries));
// console.log(findCountry(countries));
// console.log(getCountryByCode(countries))