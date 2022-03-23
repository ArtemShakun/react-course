const store = function() {
    let countries = [];
    return {
        setData: newData => countries = newData,
        getData: () => countries
    }
}();

function getNamesStr(data) {
    if (!data) {
        return '';
    }
    return data.map(data => data.name).join(', ');
}

function getNameCountryByCode(borders) {
    const countries = store.getData();
    const borderCountryNames = [];

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
        let search = e.currentTarget.value;
        search = search.trim().toLowerCase();
        const filteredCountries = countries.filter(country => {
            return country.name.toLowerCase().indexOf(search) > -1 ||
                country.capital.toLowerCase().indexOf(search) > -1 ||
                country.region.toLowerCase().indexOf(search) > -1
        });
        renderCountries(filteredCountries);
    }

    document.getElementById('regions').onchange = e => {
        const region = e.currentTarget.value;
        if (region !== 'all') {
            const countriesByRegion = countries.filter(country => country.region === region);
            renderCountries(countriesByRegion);
        } else {
            renderCountries(countries);
        }
    }
}

function renderRegionsForFilter(countries) {
    const uniqueRegions = countries.reduce((acc, country) => {
        if (!acc.includes(country.region)) {
            acc.push(country.region);
        }
        return acc;
    }, []);
    htmlStr = '<option value="all">All countries</option>';
    htmlStr += uniqueRegions.map(country => `<option value=${country}>${country}</option>`).join('');
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
                <td>${getNamesStr(country.languages)}</td>
                <td>${getNamesStr(country.currencies)}</td>
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
            borders: country.borders || [],
        }));
        store.setData(mappedCountries);
        renderRegionsForFilter(mappedCountries);
        renderCountries(mappedCountries);
        setListeners();
    });