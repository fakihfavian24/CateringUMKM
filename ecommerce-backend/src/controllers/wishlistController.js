const Wishlist = require('../models/Wishlist');
const Product = require('../models/Product');

// @desc    Get user wishlist
exports.getWishlist = async (req, res, next) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id }).populate('items');

    res.status(200).json({
      success: true,
      data: wishlist || { items: [] }
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Add product to wishlist
exports.addToWishlist = async (req, res, next) => {
  try {
    const { productId } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    let wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) {
      wishlist = await Wishlist.create({ user: req.user.id, items: [productId] });
    } else {
      if (!wishlist.items.includes(productId)) {
        wishlist.items.push(productId);
        await wishlist.save();
      }
    }

    res.status(200).json({ success: true, data: wishlist });
  } catch (err) {
    next(err);
  }
};

// @desc    Remove product from wishlist
exports.removeFromWishlist = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;

    const wishlist = await Wishlist.findOneAndUpdate(
      { user: userId },
      { $pull: { items: productId } },
      { new: true }
    );

    if (!wishlist) {
      return res.status(404).json({ success: false, error: 'Wishlist not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Product removed from wishlist',
      data: wishlist
    });
  } catch (err) {
    next(err);
  }
};