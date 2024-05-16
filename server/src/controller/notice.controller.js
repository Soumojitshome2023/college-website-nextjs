const {Notice} = require("../model/notice.model.js")
const { uploadOnCloudinary } = require("../utils/cloudinary.js");

const createNotice = async (req, res) => {
    try {
        const { title, details } = req.body;
        if (
            [title, details].some(
                (field) => typeof field !== "string" || field.trim() === ""
            )
        ) {
            return res
                .status(400)
                .json({ success: false, message: "insufficient data" });
        }
        await Notice.create({
            title,
            details,
            author : req.admin
        });
        return res
            .status(200)
            .json({ success: true, message: "notice uploaded" });
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
};

const getNotices = async (req,res) => {
    try {
        const events = await Notice.find({});

        return res.status(200).json({success:true,message:'notices fetched',events})
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
}

const getNoticeById = async (req,res) => {
    try {
        const { id } = req.params;
        const notice = await Notice.findById(id);

        return res.status(200).json({success:true,message:'notice fetched',notice})
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
}

const editNotice = async (req, res) => {
    try {
        const { title, details } = req.body;
        const { id } = req.params;

        const isEventExist = await Notice.findById(id);

        if (!isEventExist) {
            return res
                .status(404)
                .json({ success: false, message: "notice doesn't exist" });
        }

        await Event.updateOne(
            { _id: id },
            {
                title,
                details,
            }
        );

        return res
            .status(200)
            .json({ success: true, message: "notice updated" });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
};

const deleteNotice = async (req, res) => {
    try {
        const { id } = req.params;

        const isEventExist = await Notice.findById(id);

        if (!isEventExist) {
            return res
                .status(404)
                .json({ success: false, message: "event doesn't exist" });
        }

        await Notice.deleteOne({ _id: id });

        return res
            .status(200)
            .json({ success: true, message: "notice deleted" });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
};

module.exports = {
    createNotice,
    editNotice,
    deleteNotice,
    getNotices,
    getNoticeById
};
