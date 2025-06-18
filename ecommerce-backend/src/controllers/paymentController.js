const Order = require('../models/Order');

// @desc    Process payment for an order
// @route   POST /api/payments
// @access  Private
exports.processPayment = async (req, res, next) => {
  try {
    const { orderId, paymentData } = req.body;

    if (!orderId || !paymentData) {
      return res.status(400).json({ success: false, error: 'Missing orderId or payment data' });
    }

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    // Hanya pemilik order atau admin yang boleh bayar
    if (order.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, error: 'Not authorized to pay for this order' });
    }

    // Simulasi pembayaran sukses
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: paymentData.id || 'manual_txn_id',
      status: paymentData.status || 'COMPLETED',
      update_time: new Date().toISOString(),
      email_address: paymentData.email || req.user.email
    };

    await order.save();

    res.status(200).json({
      success: true,
      message: 'Payment processed successfully',
      data: order
    });
  } catch (err) {
    next(err);
  }
};
