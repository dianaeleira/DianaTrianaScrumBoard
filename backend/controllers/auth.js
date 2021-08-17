const bcrypt = require("bcrypt");
const User = require("../models/user");

const login = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user || res.length === 0)
        return res
            .status(400)
            .send("Invalid Credentials.");
    const hash = await bcrypt.compare(req.body.password, user.password);
    if (!hash)
        return res
            .status("400")
            .send("invalid credentials");

    try {
        const jwtToken = user.generateJWT();
        return res.status(200).send({ jwtToken });
    } catch (e) {
        return res.status(400).send("Login error.");
    }
}

module.exports = { login }