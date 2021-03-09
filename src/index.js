import './css/style.css';
import fetchCountries from './js/fetchCountries.js';
import notifications from './js/notification.js';
import refs from './js/refs.js';
import debounce from 'lodash.debounce';
import countriesMarkup from './js/markup.js';

const {
  errorNotification,
  noticeNotification,
  emptyNotification,
} = notifications;

const { input, countryList } = refs;

input.addEventListener('input', debounce(countryRequest, 1000));

noticeNotification();

function countryRequest() {
  countryList.innerHTML = '';
  const searchQuery = input.value;
  if (!searchQuery) {
    emptyNotification();
    return;
  }
  fetchCountries(searchQuery).then(countriesMarkup).catch(errorNotification);
}
