const authController = require("../controller/auth.js");
const express = require("express")
const router = express.Router();

const{
    signup,
    userLogin,
    logout,
    forgetPassword,
    resetPassword,
    refreshAccessToken
} = authController;


router.post("/login/user",userLogin);
router.post("/signup",signup);
router.post("/logout",logout);
router.post("/forget-password",forgetPassword);
router.post("/reset-password/:token",resetPassword);
router.get("/refresh-token",refreshAccessToken);

module.exports = router;