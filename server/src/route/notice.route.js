const express = require("express");
const authenticateAdmin = require("../middleware/auth.middleware");
const { createNotice, getNotices, editNotice, deleteNotice } = require("../controller/notice.controller");

const noticeRouter = express.Router();

noticeRouter.post(
    "/upload",
    // upload.fields([{ name: "event", maxCount: 1 }]),
    createNotice
);

noticeRouter.get("/all",getNotices);

noticeRouter.post("/edit", authenticateAdmin, editNotice);

noticeRouter.post("/delete", authenticateAdmin, deleteNotice);

module.exports = noticeRouter;
