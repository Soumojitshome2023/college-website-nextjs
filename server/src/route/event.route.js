const express = require("express");
const { upload } = require("../middleware/multer.middleware");
const {
    createEvent,
    editEvent,
    deleteEvent,
} = require("../controller/event.controller");
const authenticateAdmin = require("../middleware/auth.middleware");

const eventRouter = express.Router();

eventRouter.post(
    "/upload",
    authenticateAdmin,
    upload.fields([{ name: "event", maxCount: 1 }]),
    createEvent
);

eventRouter.post("/edit", authenticateAdmin, editEvent);

eventRouter.post("/delete", authenticateAdmin, deleteEvent);

module.exports = eventRouter;
