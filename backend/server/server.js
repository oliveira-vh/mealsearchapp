const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/', require('./route/searchRoute'));

app.listen(process.env.PORT || 3030, function(){
    console.log('Server started successfully.')
});