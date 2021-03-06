// init
document.addEventListener('DOMContentLoaded', initApp);

// Global variables
const jsSelectors = {
    'inputResult': document.querySelector('.js-field-result'),
    'inputNumberUAH': document.querySelector('.js-field-UAH'),
    'selectCurrencyType': document.querySelector('.js-select-currencies'),
    'spanDate': document.querySelector('.js-date-field'),
    'titleDate': document.querySelector('.js-table-date-title'),
    'calendar': document.querySelector('.js-calendar'),
};

const store = function() {
    let currencies = [];
    return {
        setDataCurrencies: newData => currencies = newData,
        getDataCurrencies: () => currencies,
    }
}();

function updateDate(date) {
    let reverseDateStr = date.split('-').reverse().join('.');
    jsSelectors.spanDate.innerText = reverseDateStr;
    jsSelectors.titleDate.innerText = reverseDateStr;
    jsSelectors.calendar.value = date;
};

function resetForm() {
    jsSelectors.inputNumberUAH.value = '';
    jsSelectors.inputResult.placeholder = '0.00';
};

function setListeners() {
    document.querySelector('.js-calendar').onchange = e => {
        let date = e.target.value;
        localStorage.setItem('date', date);
        updateDate(date);
        setInfo(date);
    };

    document.querySelector('.js-reset-form').onclick = () => resetForm();

    document.querySelector('.js-button-convertor').onclick = () => {
        const currencies = store.getDataCurrencies();
        const countryCurrency = currencies.find(currency => currency.currencyType === jsSelectors.selectCurrencyType.value);
        jsSelectors.inputResult.placeholder = (countryCurrency && jsSelectors.inputNumberUAH.value.length !== 0) 
            ? Math.trunc((jsSelectors.inputNumberUAH.value / countryCurrency.rate) * 100) / 100 
            : '0.00';
    };
};

function renderDataCurrencies(currencies) {
    let htmlStr = currencies.reduce((acc, currencies, index) => {
        acc += `<tr>
                <td>${index += 1}</td>
                <td>${currencies.currencyType}</td>
                <td>${currencies.name}</td>
                <td>${currencies.rate}</td>
        </tr>`
        return acc;
    }, '');
    document.querySelector('table tbody').innerHTML = htmlStr;
};

function renderSelectCurrencyType(currencies) {
    const sortCurrenciesType = [...currencies].sort((a, b) => a.currencyType > b.currencyType ? 1 : -1);
    let htmlStr = sortCurrenciesType.reduce((acc, currencies) => {
        acc += `<option>${currencies.currencyType}</option>`
        return acc;
    }, '<option selected>Choose...</option>');
    jsSelectors.selectCurrencyType.innerHTML = htmlStr;
};

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
        }));

        store.setDataCurrencies(mappedCurrencies);
        renderDataCurrencies(mappedCurrencies);
        renderSelectCurrencyType(mappedCurrencies);
        setListeners();
        resetForm();
    } catch (error) {
        alert(error.message);
    };
};

function initApp() {
    if (!localStorage.getItem('date')) {
        localStorage.setItem('date', new Date().toISOString().slice(0, 10));
    }
    let date = localStorage.getItem('date');
    updateDate(date);
    setInfo(date);
};