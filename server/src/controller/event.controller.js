const { Event } = require("../model/events.model.js");
const { uploadOnCloudinary } = require("../utils/cloudinary.js");

const createEvent = async (req, res) => {
    try {
        const { title, details,posterURL } = req.body;
        if (
            [title, details,posterURL].some(
                (field) => typeof field !== "string" || field.trim() === ""
            )
        ) {
            return res
                .status(400)
                .json({ success: false, message: "insufficient data" });
        }
        await Event.create({
            title,
            details,
            posterURL,
            author : req.admin
        });
        return res
            .status(200)
            .json({ success: true, message: "event uploaded" });
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
};

const getEvents = async (req,res) => {
    try {
        const events = await Event.find({});

        return res.status(200).json({success:true,message:'events fetched',events})
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
}

const getEventById = async (req,res) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);

        return res.status(200).json({success:true,message:'event fetched',event})
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
}

const editEvent = async (req, res) => {
    try {
        const { title, details } = req.body;
        const { id } = req.params;

        const isEventExist = await Event.findById(id);

        if (!isEventExist) {
            return res
                .status(404)
                .json({ success: false, message: "event doesn't exist" });
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
            .json({ success: true, message: "event updated" });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        const isEventExist = await Event.findById(id);

        if (!isEventExist) {
            return res
                .status(404)
                .json({ success: false, message: "event doesn't exist" });
        }

        await Event.deleteOne({ _id: id });

        return res
            .status(200)
            .json({ success: true, message: "event deleted" });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
};

module.exports = {
    createEvent,
    editEvent,
    deleteEvent,
    getEvents,
    getEventById
};
