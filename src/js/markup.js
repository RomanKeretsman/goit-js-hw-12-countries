import countryCardTemplate from '../templates/countryCardTemplate.hbs';
import countryListTemplate from '../templates/countryListTemplate.hbs';
import refs from './refs.js';

const { countryList } = refs;


function countriesMarkup(data) {
    let markup;
    if (data.length >= 2 && data.length <= 10) {
        markup = countryListTemplate(data);
    }
    if (data.length === 1) {
        markup = countryCardTemplate(data);
    }
    if (data.length > 10) {
        return
    }
    return countryList.insertAdjacentHTML('afterbegin', markup);
}

export default countriesMarkup;