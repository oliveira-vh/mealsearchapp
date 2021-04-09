const searchData = require('../data/searchData');

function getMeals(query) {
    return searchData.getData(query);
}

module.exports = {
    getMeals
}