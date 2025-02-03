const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const upload = require("../config/multerConfig.js");

router.get("/", userController.getAllUsers);
router.post("/", upload.single("profileImage"), userController.createUser);

module.exports = router;
