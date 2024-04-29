const {Router} = require("express");
const { createAccount } = require("../controller/admin.controller.js");

const adminRouter = Router();

adminRouter.post('/admin/signup',createAccount);


module.exports = adminRouter;