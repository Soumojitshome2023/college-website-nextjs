const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        details: {
            type: String,
            required: true,
        },
        posterURL: {
            type: String,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = { Event: mongoose.model("Event", eventsSchema) };
