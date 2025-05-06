// controllers/paymentController.js
import Razorpay from 'razorpay';
import { config } from 'dotenv';
import crypto from 'crypto';
import Appointment from '../models/appointmentModel.js'; 

// Load environment variables from a .env file
config();

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // From your .env file
  key_secret: process.env.RAZORPAY_KEY_SECRET, // From your .env file
});

// Create Razorpay Order
export const createRazorpayOrder = async (req, res) => {
  const { amount } = req.body; // Amount passed from frontend (in rupees)

  // Validate input
  if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ success: false, message: 'Invalid amount' });
  }

  try {
    const options = {
      amount: amount * 100, // Amount in paise (Razorpay expects amount in paise)
      currency: 'INR',
      receipt: 'receipt#1', // You can customize this
    };

    // Create the Razorpay order
    const order = await razorpayInstance.orders.create(options);

    res.status(200).json({
      success: true,
      order: order,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating Razorpay order',
    });
  }
};

// Verify Payment Signature
export const verifyPaymentSignature = async (req, res) => {
    const { paymentId, orderId, signature, appointmentId } = req.body;
  
    // Generate the signature to verify it
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(orderId + '|' + paymentId)
      .digest('hex');
  
    // Check if the generated signature matches the signature from Razorpay
    if (generatedSignature === signature) {
      try {
        // If the payment is verified, update the appointment document
        const appointment = await Appointment.findById(appointmentId);
  
        if (!appointment) {
          return res.status(404).json({
            success: false,
            message: 'Appointment not found',
          });
        }
  
        // Update appointment payment status
        appointment.payment = true;
        appointment.paymentId = paymentId;
        appointment.paymentTimestamp = new Date();  // Store the payment timestamp
        await appointment.save();
  
        return res.status(200).json({
          success: true,
          message: 'Payment Verified and Appointment Updated',
        });
      } catch (error) {
        console.error('Error updating appointment:', error);
        return res.status(500).json({
          success: false,
          message: 'Error updating appointment payment status',
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: 'Payment verification failed',
      });
    }
  };
