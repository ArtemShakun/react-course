const store = function() {
    let countries = [];
    return {
        setData: newData => countries = newData,
        getData: () => countries
    }
}();

function parseData(data) {
    if (!data) {
        return '';
    }
    return data.map(data => data.name).join(', ');
}

function getNameCountryByCode(borders) {
    const countries = store.getData();
    const borderCountryNames = [];

    if (!borders) {
        return '';
    }

    borders.map(border => {
        countries.find(country => {
            if (country.alpha3Code === border) {
                borderCountryNames.push(country.name);
            }
        })
    })
    return borderCountryNames.join(', ');
}

function setListeners() {
    const countries = store.getData();
    document.getElementById('search').onkeyup = e => {
        const search = e.currentTarget.value;
        search = search.trim().toLowerCase();
        const filteredCountries = countries.filter(country => {
            return country.name.toLowerCase().indexOf(search) > -1 ||
                country.capital.toLowerCase().indexOf(search) > -1 ||
                country.region.toLowerCase().indexOf(search) > -1
        });
        renderCountries(filteredCountries);
    }

    document.getElementById('regions').onchange = e => {
        const region = e.currentTarget.value.toLowerCase();
        if (region !== 'all') {
            const filteredRegion = countries.filter(country => {
                return country.region.toLowerCase().indexOf(region) > -1;
            });
            renderCountries(filteredRegion);
        } else {
            renderCountries(countries);
        }
    }
}

function renderRegionsForFilter(countries) {
    htmlStr = '<option value="all">All countries</option>';
    countries.map((country) => {
            if(!htmlStr.includes(country.region)) {
                htmlStr += `<option value=${country.region}>${country.region}</option>`;
            }
    });
    document.getElementById('regions').innerHTML = htmlStr;
}

function renderCountries(countries) {
    let htmlStr = countries.reduce((html, country) => {
        html += `<tr>
                <td>${country.name}</td>
                <td>${country.capital }</td>
                <td>${country.region}</td>
                <td>${country.population}</td>
                <td>${country.area}</td>
                <td>${parseData(country.languages)}</td>
                <td>${parseData(country.currencies)}</td>
                <td>${getNameCountryByCode(country.borders)}</td>
                <td><img src="${country.flag}" width="50"></td>
                </tr>`
        return html;
    }, '');

    document.querySelector('.table tbody').innerHTML = htmlStr;
    // SOLID. S - Single Responsibility.
}

fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => {
        let mappedCountries = data.map(country => ({
            name: country.name,
            capital: country.capital || '',
            population: country.population,
            area: country.area,
            flag: country.flag,
            region: country.region || '',
            alpha3Code: country.alpha3Code,
            languages: country.languages,
            currencies: country.currencies,
            borders: country.borders,
        }));
        store.setData(mappedCountries);
        renderRegionsForFilter(mappedCountries);
        renderCountries(mappedCountries);
        setListeners();
    });