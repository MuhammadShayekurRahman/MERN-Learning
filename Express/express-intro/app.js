const { application } = require('express');
const express = require('express');

const app = express();

app.listen(8080);

const server = app.listen(() => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});