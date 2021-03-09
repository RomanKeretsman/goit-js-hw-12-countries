function fetchCountries(searchQuery) {
  const URL = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(URL)
    .then((response) => {
      if (response.ok)
      return response.json();
    })
}

export default fetchCountries;
