const express = require("express");
const { upload } = require("../middleware/multer.middleware");
const {
    createEvent,
    editEvent,
    deleteEvent,
    getEvents,
} = require("../controller/event.controller");
const authenticateAdmin = require("../middleware/auth.middleware");

const eventRouter = express.Router();

eventRouter.post(
    "/upload",
    // upload.fields([{ name: "event", maxCount: 1 }]),
    authenticateAdmin,
    createEvent
);

eventRouter.get("/all",getEvents);

eventRouter.post("/edit", authenticateAdmin, editEvent);

eventRouter.post("/delete", authenticateAdmin, deleteEvent);

module.exports = eventRouter;
