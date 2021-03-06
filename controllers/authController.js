const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Load User model
const User = require("../models/userModel");

// @route POST api/users/register
// @desc Register user
// @access Public
exports.register = async (req, res) => {
    // Form validation
    
    const { errors, isValid } = validateRegisterInput(req.body);
    
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
        
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
          });
        });
      }
    });
}

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
exports.login = async (req, res) => {
    // Form validation
    
    const { errors, isValid } = validateLoginInput(req.body);
    
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    
    const { email, password } = req.body;
    
    // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user doesn't exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  
      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user._id,
            name: user.name
          };
          
          // Sign token
          jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: `Bearer ${token}`
              });
            }
            );
          } else {
            return res
            .status(401)
            .json({ passwordincorrect: "Password incorrect" });
          }
        });
    });
}


