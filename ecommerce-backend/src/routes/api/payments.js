// const express = require('express');
// const router = express.Router();

// // Temporary route
// router.get('/', (req, res) => {
//   res.json({ message: 'Payments route' });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const { processPayment } = require('../../controllers/paymentController');
const { protect } = require('../../middleware/auth');

router.post('/', protect, processPayment);

module.exports = router;
