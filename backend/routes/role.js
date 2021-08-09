const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/role");

router.post("/registerRole", RoleController.registerRole);
router.get("/listRole", RoleController.listRole);

module.exports = router;