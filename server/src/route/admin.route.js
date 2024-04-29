const {Router} = require("express");
const { createAccount, adminLogin, getAdmin, getAccessToken } = require("../controller/admin.controller.js");
const authenticateAdmin = require("../middleware/auth.middleware.js");

const adminRouter = Router();

adminRouter.post('/admin/signup',createAccount);

adminRouter.post('/admin/login',adminLogin);

adminRouter.post('/admin/getadmin',authenticateAdmin,getAdmin);

adminRouter.post('/admin/getaccesstoken',getAccessToken);

module.exports = adminRouter;