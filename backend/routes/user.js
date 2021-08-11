const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

router.post("/registerUser", UserController.registerUser);
//http://localhost:3001/api/user/listUser ? significa que el parámetro es opcional
router.get("/listUser/:name?", UserController.listUser);

module.exports = router;