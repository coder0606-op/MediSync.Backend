import express from "express";
import { appointmentComplete, appointmentsDoctor, doctorList, loginDoctor , appointmentCancel, doctorDashboard, doctorProfile, updateDoctorProfile} from "../controllers/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

//create endpoint for all doctor list
doctorRouter.get("/list", doctorList);
doctorRouter.post("/login",loginDoctor)
doctorRouter.get("/appointments",authDoctor,appointmentsDoctor)
doctorRouter.post("/complete-appointment",authDoctor,appointmentComplete)
doctorRouter.post("/cancel-appointment",authDoctor,appointmentCancel)
doctorRouter.get("/dashboard",authDoctor,doctorDashboard)
doctorRouter.get("/profile",authDoctor,doctorProfile)
doctorRouter.post("/update-profile",authDoctor,updateDoctorProfile)

export default doctorRouter;
