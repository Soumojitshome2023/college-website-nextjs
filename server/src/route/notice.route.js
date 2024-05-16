const express = require("express");
const authenticateAdmin = require("../middleware/auth.middleware");
const {
    createNotice,
    getNotices,
    editNotice,
    deleteNotice,
} = require("../controller/notice.controller");
const isAdmin = require("../middleware/admin.middleware");

const noticeRouter = express.Router();

noticeRouter.post(
    "/upload",
    // upload.fields([{ name: "event", maxCount: 1 }]),
    authenticateAdmin,
    isAdmin,
    createNotice
);

noticeRouter.get("/all", getNotices);

noticeRouter.post("/edit", authenticateAdmin, isAdmin, editNotice);

noticeRouter.post("/delete", authenticateAdmin, isAdmin, deleteNotice);

module.exports = noticeRouter;
