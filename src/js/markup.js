import countryCardTemplate from '../templates/countryCardTemplate.hbs';
import countryListTemplate from '../templates/countryListTemplate.hbs';
import notifications from './notification.js';
import refs from './refs.js';

const { succsessNotification, preciseRequestNotification } = notifications;

const { countryList } = refs;


function countriesMarkup(data) {
    let markup;
    if (data.length >= 2 && data.length <= 10) {
        markup = countryListTemplate(data);
    }
    if (data.length === 1) {
        markup = countryCardTemplate(data);
        succsessNotification();
    }
    if (data.length > 10) {
        preciseRequestNotification();
        return;
    }
    return countryList.insertAdjacentHTML('afterbegin', markup);
}

export default countriesMarkup;