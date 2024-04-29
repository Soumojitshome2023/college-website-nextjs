const jwt = require("jsonwebtoken");
const Admin = require("../model/admin.model.js");

const authenticateAdmin = async (req, res, next) => {
    try {
        const { accessToken } = req.cookies;
        if (!accessToken) {
            return res
                .status(405)
                .json({ success: false, message: "unauthorized access" });
        }

        const decoded = jwt.decode(accessToken, process.env.ACCESS_TOKEN_KEY);

        const admin = await Admin.findById(decoded.id).select("-password");
        if (!admin) {
            return res
                .status(404)
                .json({ success: false, message: "invalid token" });
        }
        req.admin = admin;
        next();
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "internal server error" });
    }
};

module.exports = authenticateAdmin;
