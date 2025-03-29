const User = require("../models/User");

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server error." });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const { name, address, bio, profilePicture } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            { name, address, bio, profilePicture },
            { new: true, runValidators: true }
        ).select("-password");

        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: "Server error." });
    }
};
