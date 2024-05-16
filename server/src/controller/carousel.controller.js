const { Carousel } = require("../model/carousel.model");


const uploadCarousel = async (req, res) => {
    try {
        const { imageURL } = req.body;
        if (!imageURL) {
            return res
                .status(400)
                .json({ success: false, message: "insufficient data" });
        }
        await Carousel.create({
            imageURL,
            author : req.admin
        });
        return res
            .status(200)
            .json({ success: true, message: "carousel image uploaded" });
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
};

const getCarousels = async (req,res) => {
    try {
        const images = await Carousel.find({});

        return res.status(200).json({success:true,message:'images fetched',images})
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
}

const getCarouselsById = async (req,res) => {
    try {
        const { id } = req.params;
        const image = await Carousel.findById(id);

        return res.status(200).json({success:true,message:'image fetched',image})
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
}

const deleteCarousel = async (req, res) => {
    try {
        const { id } = req.params;

        const isEventExist = await Carousel.findById(id);

        if (!isEventExist) {
            return res
                .status(404)
                .json({ success: false, message: "carousel doesn't exist" });
        }

        await Carousel.deleteOne({ _id: id });

        return res
            .status(200)
            .json({ success: true, message: "carousel deleted" });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
};

module.exports = {
    uploadCarousel,
    getCarousels,
    getCarouselsById,
    deleteCarousel
};
