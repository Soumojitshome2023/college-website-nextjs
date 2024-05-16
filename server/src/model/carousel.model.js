const mongoose = require("mongoose");

const carouselSchema = new mongoose.Schema(
    {
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

module.exports = { Carousel: mongoose.model("Carousel", carouselSchema) };
