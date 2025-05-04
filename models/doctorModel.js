// here we will create the mongoose model for the doctor using that we can store our data in our database

import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean , default:true},
    fees: { type: Number, required: true },
    address: { type: Object, required: true },
    data: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
  },
  { minimize: false }
); // to store any object in empty data we add

const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema); //whenever we start project it will get excuted and it will create the model for us multiple time

export default doctorModel;
