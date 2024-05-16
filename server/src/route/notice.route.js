const express = require("express");
const authenticateAdmin = require("../middleware/auth.middleware");
const {
    createNotice,
    getNotices,
    editNotice,
    deleteNotice,
    getNoticeById,
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

noticeRouter.get("/:id", getNoticeById);

noticeRouter.post("/edit/:id", authenticateAdmin, isAdmin, editNotice);

noticeRouter.post("/delete/:id", authenticateAdmin, isAdmin, deleteNotice);

module.exports = noticeRouter;
