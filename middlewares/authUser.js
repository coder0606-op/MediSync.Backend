import jwt from "jsonwebtoken";

//user authentication middleware
const authUser = async (req, res, next ) => { // next is callback function , as it is middleware that's why adding next
  try {
    const { token } = req.headers; // Get token from headers
    if (!token) {
      return res.json({ success: false, message: "Not authorized Login Again" });
    }

    // Verify token
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id

    next(); // If valid, proceed to the next middleware/controller
  } catch (error) {
    console.error("Token validation error:", error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;