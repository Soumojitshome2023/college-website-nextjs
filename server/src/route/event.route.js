const express = require("express");
const { upload } = require("../middleware/multer.middleware");
const {
    createEvent,
    editEvent,
    deleteEvent,
    getEvents,
    getEventById,
} = require("../controller/event.controller");
const authenticateAdmin = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/admin.middleware");

const eventRouter = express.Router();

eventRouter.post(
    "/upload",
    // upload.fields([{ name: "event", maxCount: 1 }]),
    authenticateAdmin,
    isAdmin,
    createEvent
);

eventRouter.get("/all", getEvents);

eventRouter.get("/:id", getEventById);

eventRouter.post("/edit", authenticateAdmin, isAdmin, editEvent);

eventRouter.post("/delete", authenticateAdmin, isAdmin, deleteEvent);

module.exports = eventRouter;
