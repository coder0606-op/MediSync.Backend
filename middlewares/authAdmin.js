import jwt from "jsonwebtoken";

//admin authentication middleware
const authAdmin = async (req, res, next ) => { // next is callback function , as it is middleware that's why adding next
  try {
    const { atoken } = req.headers; // Get token from headers
    if (!atoken) {
      return res.json({ success: false, message: "Not authorized Login Again" });
    }

    // Verify token
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

    // Check if the token payload matches admin email or another identifying property
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not Authorized login again" });
    }

    next(); // If valid, proceed to the next middleware/controller
  } catch (error) {
    console.error("Token validation error:", error);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;