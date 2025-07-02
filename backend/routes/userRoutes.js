const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/authMiddleware");
const User = require("../models/User");

// GET /api/user/profile
router.get("/profile", requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

module.exports = router;
