const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Конфигурация подключения к базе данных
const dbConfig = {
    user: 'db_a9c281_exam_admin',
    password: 'Qwerty123',
    server: 'SQL5106.site4now.net',
    database: 'db_a9c281_exam',
};

// Подключение к базе данных
sql.connect(dbConfig)
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.log('Database connection error: ', err);
    });

// Модели и контроллеры
const User = require('./models/userModel');
const Menu = require('./models/menuModel');
const Order = require('./models/orderModel');

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
