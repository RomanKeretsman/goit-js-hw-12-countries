import './css/style.css';
import fetchCountries from './js/fetchCountries.js';
import refs from './js/refs.js';
import debounce from 'lodash.debounce';
import countriesMarkup from './js/markup.js';

const { input, countryList } = refs;

input.addEventListener('input', debounce(countryRequest, 1000));

function countryRequest() {
    countryList.innerHTML = '';
    let searchQuery = input.value;
    fetchCountries(searchQuery).then(countriesMarkup);
}

