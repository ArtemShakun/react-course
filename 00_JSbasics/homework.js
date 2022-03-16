console.table(countries);

function getAveragePopulation(countries) {
    if (!countries || !countries.length) {
        return 0;
    }
    var averagePopulation = countries.reduce((acc, currentValue) => acc + currentValue.population, 0) / countries.length;
    return averagePopulation.toFixed(2);

        //в каждой стране есть поле population, вернуть из функции среднее арифм.
};

function getNames(countries) {
    var countriesNames = countries.map(country => country.name);
    return countriesNames;

    //вернуть список (массив) имен стран (поле name)
};

function findCountry(countries) {
    var countryName = prompt('Enter country name:').toLowerCase();
    var countriesNames = getNames(countries);
    return (countriesNames.some(country => country.toLowerCase() === countryName));

    //ввод через prompt название страны, вернуть true если такая страна нашлась по имени, false если не нашлась. можно использовать для этого getNames выше + indexOf
};

function getCountryByCode(countries) {
    var countryCode = prompt('Enter country code: ').toUpperCase();

    if (countryCode.length !== 3) {
        return 'Error! Your code invalid !!!';
    }

    const isCountry = countries.filter(country => country.alpha3Code === countryCode);
    return (isCountry.length !== 0) ? isCountry : false;

    //пользователь вводит через prompt трехбуквенный код. если введенная строка не 3 символа длиной - выдать сообщение о неправильном вводе.
    //по введенной строке (трехбуквенный код) найти страну (должно совпадать с alpha3Code, которое есть у каждой страны).
    //и вернуть из функции либо объект с найденной страной, либо false
};

//Удачи.

// console.log(getAveragePopulation(countries));
// console.log(getNames(countries));
// console.log(findCountry(countries));
// console.log(getCountryByCode(countries));