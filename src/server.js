// server.js

const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const countFilePath = './userCount.json';

app.use(cors());

app.get('/increment-user-count', (req, res) => {
    fs.readFile(countFilePath, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading user count file');
        }

        let userCount = JSON.parse(data).count;
        userCount += 1;

        fs.writeFile(countFilePath, JSON.stringify({ count: userCount }), (err) => {
            if (err) {
                return res.status(500).send('Error updating user count file');
            }

            res.send({ count: userCount });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

