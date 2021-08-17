const express = require("express");
const router = express.Router();
const BoardController = require("../controllers/board");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

router.post("/saveTask", Auth, ValidateUser, BoardController.saveTask);
module.exports = router;