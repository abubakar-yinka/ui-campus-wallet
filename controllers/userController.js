const User = require("../models/userModel");

  // @route GET api/users/
  // @desc User Dashboard
  // @access Private
exports.getUserProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user._id)

      if (user) {
        res.json(user)
      } else {
        res.status(404).json({message: 'user not found'})
      }
      
      
    } catch (error) {
      res.status(404).json({ message: "User not found" });
      // console.error(`${error}`)
    }
}
