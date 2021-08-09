const Role = require("../models/role");
const registerRole = async (req, res) => {
    if (!req.body.name || !req.body.description)
        return res.status(401).send("Process failed: Incomplete data.");

    const existingRole = await Role.findOne({ name: req.body.name });
    if (existingRole) return res.status(401).send("Process failed: role already exists.");

    const role = new Role({
        name: req.body.name,
        description: req.body.description,
        dbStatus: true
    });
    const result = await role.save();
    if (!result) return res.status(401).send("Failed to register role.");
    return res.status(200).send({ role });
}

const listRole = async (req, res) => {
    const role = await Role.find();
    if (!role) return res.status(401).send("No role found");
    return res.status(200).send({ role });
}

module.exports = { registerRole, listRole }