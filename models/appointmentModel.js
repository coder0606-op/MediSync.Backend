import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    docId: { type: String, required: true },
    slotDate: { type: String, required: true },
    slotTime: { type: String, required: true },
    userData: { type: Object, required: true },
    docData: { type: Object, required: true },
    amount: { type: Number, required: true },
    data: { type: Number, required: true },
    cancelled: { type: Boolean, default: false },
    payment: { type: Boolean, default: false },  // This tracks if the payment is successful
    isCompleted: { type: Boolean, default: false },
    paymentId: { type: String, default: null },  // Added to store Razorpay payment ID after successful payment
    paymentTimestamp: { type: Date, default: null },  // Store the payment timestamp
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;