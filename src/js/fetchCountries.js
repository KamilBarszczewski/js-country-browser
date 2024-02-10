import debounce from 'lodash.debounce';

const urlApi = 'https://restcountries.com/v3.1/name/';
const search = debounce(searchCountry, 300)

function fetchCountry(country) {
    const countryInfoContainer = document.getElementById('countryInfo');
    countryInfoContainer.innerHTML = `
          <h2>${country.name.common}</h2>
          <p>Capital: ${country.capital[0]}</p>
          <p>Population: ${country.population}</p>
          <p>Languages: ${
            Object.values(country.languages)
              ? Object.values(country.languages).join(', ')
              : 'No information'
          }</p>
          <img src="${country.flags.svg}" alt="Country flag ${
      country.name.common
    }">
        `;
  }

  function handleApiResponse(data) {
    const countryInfoContainer = document.getElementById('countryInfo');
  
    if (Array.isArray(data) && data.length > 0) {
      if (data.length > 10) {
        countryInfoContainer.innerHTML =
          'Too many matches found. Please enter a more specific name.';
      } else if (data.length === 1) {
        const foundCountry = data[0];
        fetchCountry(foundCountry);
      } else {
        countryInfoContainer.innerHTML = 'Found countries:';
        data.forEach(country => {
          countryInfoContainer.innerHTML += `
                <div>
                  <p>${country.name.common}</p>
                  <img src="${country.flags.svg}" alt="Country flag ${country.name.common}">
                </div>
              `;
        });
      }
    } else {
      countryInfoContainer.innerHTML = 'Unable to find country.';
    }
  }

  function searchCountry() {
    const countryInput = document.getElementById('countryInput');
    const countryName = countryInput.value.trim();
  
    if (countryName === '') {
      const countryInfoContainer = document.getElementById('countryInfo');
      countryInfoContainer.innerHTML = '';
      return;
    }
  
    const searchUrl = `${urlApi}${countryName}`;
  
    fetch(searchUrl)
      .then(response => response.json())
      .then(handleApiResponse)
      .catch(error => {
        console.error('Error ocured:', error);
      });
  }

const countryInput = document.getElementById('countryInput');
countryInput.addEventListener('input', search);