const express = require('express');
const path = require('path');
const app = express(), bodyParser = require("body-parser"),
    port = 8899, users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/server/users', (req, res) => {
    res.json(users);
});
app.post('/server/user', (req, res) => {
    const user = req.body.user;
    users.push(user);
    res.json("Użytkownik dodany");
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.listen(port, () => {
    console.log(`Serwer nasłuchuje na porcie: ${port}`);
});
