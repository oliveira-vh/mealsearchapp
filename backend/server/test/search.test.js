const { expect } = require('@jest/globals');
const axios = require('axios')
const { getData } = require('../data/searchData');


test('Should get status code 200', async function(){
    const response = await axios({
        url: 'http://localhost:3030/search/turkey',
        method: 'get'
    });
    expect(response.status).toBe(200);
});

test('Should get data', async function(){
    const response = await getData('');
    expect(response.length).toBeGreaterThanOrEqual(1);
});