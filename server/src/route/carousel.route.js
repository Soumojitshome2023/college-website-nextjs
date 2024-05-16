const express = require("express");
const authenticateAdmin = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/admin.middleware");
const { uploadCarousel, getCarousels, getCarouselsById, deleteCarousel } = require("../controller/carousel.controller");

const carouselRouter = express.Router();

carouselRouter.post(
    "/upload",
    // upload.fields([{ name: "event", maxCount: 1 }]),
    authenticateAdmin,
    isAdmin,
    uploadCarousel
);

carouselRouter.get("/all", getCarousels);

carouselRouter.get("/:id", getCarouselsById);

carouselRouter.post("/delete/:id", authenticateAdmin, isAdmin, deleteCarousel);

module.exports = carouselRouter;
