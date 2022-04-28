const express = require("express");
const { getLogin } = require("../controllers/Login");

const router = express.Router();

router.post("/login", getLogin);

module.exports = router;
