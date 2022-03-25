// init
document.addEventListener('DOMContentLoaded', initApp);

// Global variables
const inputNumberUAH = document.querySelector('.js-inputUAH');
const inputResult = document.querySelector('.js-field-result');
const selectCurrencyType = document.querySelector('.js-field-currency');
const inputCurrentDate = document.querySelector('.js-date');

const store = function() {
    let currencies = [];
    return {
        setDate: newData => localStorage.setItem('date', newData),
        getDate: () => localStorage.getItem('date'),

        setDataCurrencies: newData => currencies = newData,
        getDataCurrencies: () => currencies
    }
}();

function setListeners() {
    inputCurrentDate.onchange = e => {
        let date = e.target.value;
        store.setDate(date);
        setInfo(date);
    };

    document.querySelector('#js-buttonCurrencyConverter').onclick = () => {
        const currencies = store.getDataCurrencies();
        const countryCurrency = currencies.find(currency => currency.currencyType === selectCurrencyType.value);
        inputResult.innerText = (countryCurrency) ? store.getInputNumberUAH().value * countryCurrency.rate.toFixed('2') : '0.00';
    };
}

function clearingForm() {
    store.getInputNumberUAH().value = '';
    inputResult.innerText = '0.00';
}

function renderExchangeRates(currencies) {
    let htmlStr = currencies.reduce((acc, currencies, index) => {
        acc += `<tr>
                <td>${index += 1}</td>
                <td>${currencies.name}</td>
                <td>${currencies.rate}</td>
                <td>${currencies.currencyType}</td>
                <td>${currencies.date}</td>
        </tr>`
        return acc;
    }, '');
    document.querySelector('table tbody').innerHTML = htmlStr;
}

function renderSelectByCurrencyType(currencies) {
    const sortCurrenciesType = [...currencies].sort((a, b) => a.currencyType > b.currencyType ? 1 : -1);
    let htmlStr = sortCurrenciesType.reduce((acc, currencies) => {
        acc += `<option>${currencies.currencyType}</option>`
        return acc;
    }, '<option selected>Choose...</option>');
    selectCurrencyType.innerHTML = htmlStr;
}

async function setInfo(date) {
    try {
        const selectedDate = date.split('-').join('');
        const response = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${selectedDate}&json`);

        if (!response.ok) {
            alert('Bad response');
        }

        const currencies = await response.json();
        const mappedCurrencies = currencies.map(currencies => ({
            name: currencies.txt,
            rate: currencies.rate,
            currencyType: currencies.cc,
            date: currencies.exchangedate,
        }));

        store.setDataCurrencies(mappedCurrencies);
        renderExchangeRates(mappedCurrencies);
        renderSelectByCurrencyType(mappedCurrencies);
        setListeners();
        clearingForm();
    } catch (error) {
        alert(error.message);
    };
}

function initApp() {
    (!store.getDate()) ? store.setDate(new Date().format("yyyy-mm-dd"))
        : inputCurrentDate.value = store.getDate();

    setInfo(store.getDate());
}