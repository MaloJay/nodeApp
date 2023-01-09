const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hello: 'There!! khalid my son'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);