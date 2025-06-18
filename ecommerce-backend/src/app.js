const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const errorHandler = require('./middleware/errorHandler');

// Initialize express
const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security
app.use(helmet());
// app.use(cors());

app.use(cors({
  origin: 'http://127.0.0.1:5173', // atau 'http://localhost:5173' tergantung dari URL frontend-mu
  credentials: true
}));

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Set static folder
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes - Komentar route yang belum dibuat
// Uncomment setiap route setelah file routenya dibuat

// Jika auth.js sudah dibuat, biarkan ini aktif
// Jika belum, komentari baris ini:
app.use('/api/auth', require('./routes/api/auth'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/products', require('./routes/api/products'));
app.use('/api/categories', require('./routes/api/categories'));
app.use('/api/cart', require('./routes/api/cart'));
app.use('/api/orders', require('./routes/api/orders'));
app.use('/api/payments', require('./routes/api/payments'));
app.use('/api/wishlist', require('./routes/api/wishlist'));

// Base route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to E-Commerce API' });
});

// Error handler middleware
app.use(errorHandler);

module.exports = app;