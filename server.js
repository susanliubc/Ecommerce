const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect database
connectDB;

//Init middleware
app.use(express.json());

//Define route
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/cart', require('./routes/cart'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ${PORT'));
