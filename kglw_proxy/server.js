const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');

app.use(cors());

app.get('/', async (req, res) => {
    const response = await fetch('https://en.wikipedia.org/w/api.php?page=12_Bar_Bruise');
    res.json(await response.json())
});


app.listen(3000, () => {
    console.log('Listening on port 3000')
})