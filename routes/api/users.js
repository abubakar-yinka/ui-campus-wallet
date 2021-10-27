const express = require("express");
const router = express.Router();
const { getUserProfile } = require("../../controllers/userController")
const { register, login } = require("../../controllers/authController")
const { protect } = require("../../middleware/authMiddleware")


// Load User model
const User = require("../../models/userModel");


// @route POST api/users/register
// @desc Register user
// @access Public
router.route("/register").post(register);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.route("/login").post(login);

// @route GET api/users/:id
// @desc Get Single User for Dashboard
// @access Private 
router.route("/:id").get(getUserProfile)
  
module.exports = router;
  