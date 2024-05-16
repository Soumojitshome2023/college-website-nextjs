const isAdmin = async (req, res, next) => {
    try {
        const admin  = req.admin;

        if (!admin.isAdmin) {
            return res
                .status(400)
                .json({ success: false, message: "admin access required" });
        }
        next();
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "internal server error" });
    }
};

module.exports = isAdmin;
