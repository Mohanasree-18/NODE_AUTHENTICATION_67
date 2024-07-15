const express = require("express");
const router = express.Router();
const userCtrls = require("../controller/userCtrl");
const isAuthenticated = require("../middlewares/isAuth");
//!ROUTES

//register route
router.post("/api/users/register", userCtrls.register);
//login route
router.post("/api/users/login", userCtrls.login);
//profile route
//?profile can be seen only after logging in so authentication is requires so we placed that middleware here
router.get("/api/users/profile", isAuthenticated, userCtrls.profile);

//!EXPORTING
module.exports = router;
