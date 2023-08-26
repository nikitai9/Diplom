import express from 'express';
import bodyParser from 'body-parser';
import sql from 'mssql';
import apiRoutes from './routes/api.js';


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbConfig = {
    user: 'db_a9c281_exam_admin',
    password: 'Qwerty123',
    server: 'SQL5106.site4now.net',
    database: 'db_a9c281_exam',
};

sql.connect(dbConfig)
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.log('Database connection error: ', err);
    });

// Модели и контроллеры
const Admin = require('./models/adminModel.js');
const User = require('./models/userModel.js');
const Menu = require('./models/menuModel.js');
const Order = require('./models/orderModel.js');

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
