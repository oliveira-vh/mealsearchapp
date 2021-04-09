const axios = require('axios');

async function getData(query) {
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const meals = response.data.meals;
        return meals;
    } catch {
        return 'Problem retrieving data. Please, try again.';
    }
}

module.exports = {
    getData
}
