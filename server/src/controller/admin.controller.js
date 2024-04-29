const Admin = require("../model/admin.model.js");
const bcrypt = require("bcrypt");

const createAccount = async (req, res) => {
    try {
        const { name, username, email, password, profileURL } = req.body;

        if (
            [name, username, email, password].some((field) => {
                return field?.trim === "";
            })
        ) {
            return res
                .status(400)
                .json({ success: false, message: "insufficient data" });
        }

        const findAdmin = await Admin.findOne({ username });

        if (findAdmin) {
            return res
                .status(402)
                .json({ success: false, message: "admin already exists" });
        }

        const hashedPass = await bcrypt.hash(password, 12);

        await Admin.create({
            name,
            email,
            username,
            profileURL,
            password: hashedPass,
        });

        return res
            .status(200)
            .json({ success: true, message: "admin account created" });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
};

module.exports = {
    createAccount,
};
