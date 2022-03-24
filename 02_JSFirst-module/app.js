document.addEventListener('DOMContentLoaded', initApp);

const store = function() {
    let currencies = [];
    return {
        setDate: newData => localStorage.setItem('date', newData),
        getDate: () => localStorage.getItem('date'),

        setData: newData => currencies = newData,
        getData: () => currencies,
    }
}();

function setListeners() {
    document.querySelector('#js-date').onchange = e => {
        date = e.target.value;
        store.setDate(date);
        setInfo(date);
    };

    document.querySelector('#js-buttonCurrencyConverter').onclick = () => countWaluta();

}

function countWaluta() {
    const currencies = store.getData();
    const numberUAH = document.querySelector('#js-inputUah').value;
    const selectCountryCurrency = document.querySelector('#js-inputGroupSelect03').value;
    const countryCurrency = currencies.find(currency => currency.codeCountry === selectCountryCurrency);
    const result = numberUAH * countryCurrency.rate;
    document.querySelector('#js-result').innerText = result.toFixed('2');
}

function renderExchangeRates(currencies) {
    let htmlStr = currencies.reduce((acc, currencies, index) => {
        acc += `<tr>
                <td>${index += 1}</td>
                <td>${currencies.name}</td>
                <td>${currencies.rate}</td>
                <td>${currencies.codeCountry}</td>
                <td>${currencies.date}</td>
        </tr>`
        return acc;
    }, '');
    document.querySelector('table tbody').innerHTML = htmlStr;
}

function renderFilterByCodeCountry(currencies) {
    let htmlStr = currencies.reduce((acc, currencies) => {
        acc += `<option>${currencies.codeCountry}</option>`
        return acc;
    }, '');
    document.querySelector('#js-inputGroupSelect03').innerHTML = htmlStr;
}

async function setInfo(date) {
    try {
        const response = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date.split('-').join('')}&json`);

        if (!response.ok) {
            alert('Bad response');
        }

        const currencies = await response.json();
        const mappedCurrencies = currencies.map(currencies => ({
            name: currencies.txt,
            rate: currencies.rate,
            codeCountry: currencies.cc,
            date: currencies.exchangedate,
        }));

        store.setData(mappedCurrencies);
        renderExchangeRates(mappedCurrencies);
        renderFilterByCodeCountry(mappedCurrencies);
        setListeners();
    } catch (error) {
        alert(error.message);
    };
}

function initApp() {
    (!store.getDate()) ? store.setDate(new Date().format("yyyy-mm-dd"))
        : document.querySelector('#js-date').value = store.getDate();

    setInfo(store.getDate());
}