const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); //Allow to read uploaded file by http://localhost:5000/uploads/sektory.png

app.use('/API/auth', require('./Routes/authRoutes'));
app.use('/API/event', require('./Routes/eventRoutes'));
app.use('/API/place', require('./Routes/placeRoutes'));
app.use('/API/upload', require('./Routes/uploadRoutes'));
app.use('/API/order', require('./Routes/orderRoutes'));

app.listen(port, () => console.log(`Server is up on http://localhost:${port}`));
