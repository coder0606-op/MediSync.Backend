// routes/paymentRoutes.js
import express from 'express';
import { createRazorpayOrder, verifyPaymentSignature } from '../controllers/paymentController.js';

const router = express.Router();

// Route to create a Razorpay order
router.post('/create-order', createRazorpayOrder);

// Route to verify payment signature after payment
router.post('/verify-payment', verifyPaymentSignature);

export default router;
