import jwt from "jsonwebtoken";

//doctor authentication middleware
const authDoctor = async (req, res, next ) => { // next is callback function , as it is middleware that's why adding next
  try {
    const { dtoken } = req.headers; // Get token from headers
    if (!token) {
      return res.json({ success: false, message: "Not authorized Login Again" });
    }

    // Verify token
    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
    req.body.docId = token_decode.id

    next(); // If valid, proceed to the next middleware/controller
  } catch (error) {
    console.error("Token validation error:", error);
    res.json({ success: false, message: error.message });
  }
};

export default authDoctor;