const express = require('express');
const app = express();
const path = require('path')

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/main.html'));
});

app.listen(port, () => {
    console.log(`Express web app available at localhost: ${port}`);
});