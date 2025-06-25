const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const Category = require('../../models/Category');

// GET /api/dashboard/stats
router.get('/stats', async (req, res) => {
  try {
    const productCount = await Product.countDocuments();
    const categoryCount = await Category.countDocuments();

    res.status(200).json({
      success: true,
      data: {
        products: productCount,
        categories: categoryCount
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Gagal mengambil statistik' });
  }
});

module.exports = router;
