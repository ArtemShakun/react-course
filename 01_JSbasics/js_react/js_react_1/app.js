const store = function() {
    let countries = [];
    return {
        setData: newData => countries = newData,
        getData: () => countries
    }
}();

function setListeners() {
    document.getElementById('search').onkeyup = e => {
        let search = e.currentTarget.value;
        search = search.trim().toLowerCase();
        let countries = store.getData();
        let filteredCountries = countries.filter(country => {
            return country.name.toLowerCase().indexOf(search) > -1 ||
                country.capital.toLowerCase().indexOf(search) > -1 ||
                country.region.toLowerCase().indexOf(search) > -1
        });
        renderCountries(filteredCountries);
    }
}

function renderCountries(countries) {
    let htmlStr = countries.reduce((html, country) => {
        html += `<tr>
                <td>${country.name}</td>
                <td>${country.capital }</td>
                <td>${country.region}</td>
                <td>${country.population}</td>
                <td>${country.area}</td>
                <td><img src="${td.flag}" width="50"></td>
                </tr>`
        return html;
    }, '');

    // for(let country of countries) {
    //     htmlStr += `<tr>
    //             <td>${country.name}</td>
    //             <td>${country.capital }</td>
    //             <td>${country.region}</td>
    //             <td>${country.population}</td>
    //             <td>${country.area}</td>
    //             <td><img src="${country.flag}" width="50"></td>
    //         </tr>`
    // }
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
            alpha3Code: country.alpha3Code
        }));
        store.setData(mappedCountries);
        renderCountries(mappedCountries);
        setListeners();
    });