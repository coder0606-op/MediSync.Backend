// seedDoctors.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import doctorModel from "./doctorModel.js"; // Adjust this path to your model

dotenv.config();

// Array of 30 doctors with specific specialties
const dummyDoctors = [
  {
    name: "Dr. Ayush Mehra",
    email: "ayush@example.com",
    password: "password123",
    image: "https://cdn.pixabay.com/photo/2023/12/21/06/23/doctor-8461303_1280.jpg",
    speciality: "General Physician",
    degree: "MBBS",
    experience: "10 years",
    about: "Experienced physician providing primary healthcare.",
    available: true,
    fees: 500,
    address: {
      street: "123 Health St",
      city: "Delhi",
      state: "Delhi",
      pincode: "110001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Sneha Kapoor",
    email: "sneha@example.com",
    password: "password123",
    image: "https://www.sonicseo.com/wp-content/uploads/2020/07/surgeon.jpg",
    speciality: "Gynecologist",
    degree: "MBBS, MD (OBG)",
    experience: "5 years",
    about: "Specializing in women’s health and pregnancy care.",
    available: true,
    fees: 600,
    address: {
      street: "456 Women's Care Lane",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Ramesh Verma",
    email: "ramesh@example.com",
    password: "password123",
    image: "https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
    speciality: "Dermatologist",
    degree: "MBBS, DDVL",
    experience: "8 years",
    about: "Specialist in skin care and treatments for various dermatological conditions.",
    available: true,
    fees: 550,
    address: {
      street: "789 Skin Care Rd",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Priya Sharma",
    email: "priya@example.com",
    password: "password123",
    image: "https://reliabledelivery.com/wp-content/uploads/2014/11/bigstock-Medical-physician-doctor-woma-101147165.jpg",
    speciality: "Pediatrician",
    degree: "MBBS, DCH",
    experience: "12 years",
    about: "Caring pediatrician for infants and children.",
    available: true,
    fees: 400,
    address: {
      street: "202 Childcare Rd",
      city: "Delhi",
      state: "Delhi",
      pincode: "110002"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Amit Kumar",
    email: "amit@example.com",
    password: "password123",
    image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-File-Download-Free.png",
    speciality: "Neurologist",
    degree: "MBBS, MD Neurology",
    experience: "10 years",
    about: "Neurologist specialized in brain and nervous system health.",
    available: true,
    fees: 650,
    address: {
      street: "303 Neuro St",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Neha Singh",
    email: "neha@example.com",
    password: "password123",
    image: "https://thumbs.dreamstime.com/b/doctor-indian-38175791.jpg",
    speciality: "Gastroenterologist",
    degree: "MBBS, MD (Gastro)",
    experience: "9 years",
    about: "Gastroenterologist specializing in digestive and liver health.",
    available: true,
    fees: 700,
    address: {
      street: "404 Gastro Care Rd",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Vikram Roy",
    email: "vikram@example.com",
    password: "password123",
    image: "https://img.lovepik.com/element/40159/8653.png_1200.png",
    speciality: "General Physician",
    degree: "MBBS",
    experience: "15 years",
    about: "Experienced general physician focusing on preventative care.",
    available: true,
    fees: 500,
    address: {
      street: "505 Care Blvd",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Shubham Soni",
    email: "shubham@example.com",
    password: "password123",
    image: "https://thumbs.dreamstime.com/b/vertical-portrait-male-happy-indian-doctor-standing-clinic-hospital-smiling-happy-male-indian-latin-doctor-medical-worker-228700065.jpg",
    speciality: "Gynecologist",
    degree: "MBBS, MD (OBG)",
    experience: "7 years",
    about: "Experienced gynecologist providing pregnancy and reproductive health care.",
    available: true,
    fees: 600,
    address: {
      street: "606 Women’s Health St",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Aarti Singh",
    email: "aarti@example.com",
    password: "password123",
    image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-photo-men-doctor-physician-chest-smiling-png-image_13143575.png",
    speciality: "Dermatologist",
    degree: "MBBS, DDVL",
    experience: "9 years",
    about: "Experienced dermatologist treating all skin-related issues.",
    available: true,
    fees: 550,
    address: {
      street: "707 Skin Care Ave",
      city: "Bhopal",
      state: "Madhya Pradesh",
      pincode: "462001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Rajesh Yadav",
    email: "rajesh@example.com",
    password: "password123",
    image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-File-Download-Free.png",
    speciality: "Pediatrician",
    degree: "MBBS, DCH",
    experience: "10 years",
    about: "Experienced pediatrician specializing in childhood diseases.",
    available: true,
    fees: 450,
    address: {
      street: "808 Kid Care Rd",
      city: "Lucknow",
      state: "Uttar Pradesh",
      pincode: "226001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Rakesh Gupta",
    email: "rakesh@example.com",
    password: "password123",
    image: "https://img.freepik.com/premium-photo/portrait-indian-doctor-indian-doctor-smiling_890100-1265.jpg",
    speciality: "Neurologist",
    degree: "MBBS, MD Neurology",
    experience: "11 years",
    about: "Specialist in brain and spinal cord diseases.",
    available: true,
    fees: 750,
    address: {
      street: "909 Brain Care Blvd",
      city: "Delhi",
      state: "Delhi",
      pincode: "110003"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Anjali Patel",
    email: "anjali@example.com",
    password: "password123",
    image: "https://cdn.pixabay.com/photo/2023/12/21/06/23/doctor-8461303_1280.jpg",
    speciality: "Cardiologist",
    degree: "MBBS, MD (Cardiology)",
    experience: "9 years",
    about: "Expert in heart disease and cardiological care.",
    available: true,
    fees: 800,
    address: {
      street: "101 Heart Health Blvd",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Shalini Joshi",
    email: "shalini@example.com",
    password: "password123",
    image: "https://www.sonicseo.com/wp-content/uploads/2020/07/surgeon.jpg",
    speciality: "Orthopedic Surgeon",
    degree: "MBBS, MS (Orthopedics)",
    experience: "13 years",
    about: "Specialist in bone and joint health.",
    available: true,
    fees: 700,
    address: {
      street: "202 Bone Care Rd",
      city: "Surat",
      state: "Gujarat",
      pincode: "395001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Manoj Gupta",
    email: "manoj@example.com",
    password: "password123",
    image: "https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
    speciality: "Psychiatrist",
    degree: "MBBS, MD (Psychiatry)",
    experience: "10 years",
    about: "Specialized in mental health and behavioral therapy.",
    available: true,
    fees: 850,
    address: {
      street: "303 Mind Care Rd",
      city: "Chandigarh",
      state: "Chandigarh",
      pincode: "160017"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Asha Sharma",
    email: "asha@example.com",
    password: "password123",
    image: "https://reliabledelivery.com/wp-content/uploads/2014/11/bigstock-Medical-physician-doctor-woma-101147165.jpg",
    speciality: "Pediatrician",
    degree: "MBBS, DCH",
    experience: "7 years",
    about: "Experienced pediatrician with expertise in infant care.",
    available: true,
    fees: 500,
    address: {
      street: "404 Care Blvd",
      city: "Agra",
      state: "Uttar Pradesh",
      pincode: "282001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Alok Kumar",
    email: "alok@example.com",
    password: "password123",
    image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-File-Download-Free.png",
    speciality: "Orthopedic Surgeon",
    degree: "MBBS, MS (Orthopedics)",
    experience: "15 years",
    about: "Orthopedic surgeon with a focus on joint replacement and trauma care.",
    available: true,
    fees: 750,
    address: {
      street: "505 Joint Care Rd",
      city: "Patna",
      state: "Bihar",
      pincode: "800001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Neelam Singh",
    email: "neelam@example.com",
    password: "password123",
    image: "https://img.lovepik.com/element/40159/8653.png_1200.png",
    speciality: "Gastroenterologist",
    degree: "MBBS, MD (Gastro)",
    experience: "12 years",
    about: "Gastroenterologist specializing in the treatment of liver and digestive disorders.",
    available: true,
    fees: 700,
    address: {
      street: "606 Digestion Rd",
      city: "Indore",
      state: "Madhya Pradesh",
      pincode: "452001"
    },
    data: 2024,
    slots_booked: {},
  },
  {
    name: "Dr. Rani Sharma",
    email: "rani@example.com",
    password: "password123",
    image: "https://thumbs.dreamstime.com/b/doctor-indian-38175791.jpg",
    speciality: "Endocrinologist",
    degree: "MBBS, MD (Endocrinology)",
    experience: "8 years",
    about: "Specialized in hormone-related disorders.",
    available: true,
    fees: 800,
    address: {
      street: "707 Hormone Care Rd",
      city: "Kanpur",
      state: "Uttar Pradesh",
      pincode: "208001"
    },
    data: 2024,
    slots_booked: {},
  }
];


// Insert doctors into DB
async function seedDB() {
  try {
    await mongoose.connect("mongodb+srv://iamayush616:3002@cluster0.tt4yta2.mongodb.net/medisync?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ MongoDB connected");

    await doctorModel.deleteMany(); // Clear existing data
    const result = await doctorModel.insertMany(dummyDoctors); // Insert doctors
    console.log(`✅ Successfully inserted ${result.length} doctors.`);
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding doctors:", err);
    process.exit(1);
  }
}

seedDB();
