const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://healthruwords.p.rapidapi.com/v1/quotes/',
  params: {t: 'Wisdom', maxR: '1', size: 'medium', id: '731'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});