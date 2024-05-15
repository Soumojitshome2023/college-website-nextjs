const cloudinary = require("cloudinary");
const fs = require("fs");

cloudinary.v2.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (path) => {
    try {
        if (!path) return null;

        const resp = await cloudinary.v2.uploader.upload(path, {
            resource_type: "image",
        });
        fs.unlinkSync(path);
        return resp;
    } catch (error) {
        fs.unlinkSync(path);
        return null;
    }
};

module.exports = { uploadOnCloudinary };
