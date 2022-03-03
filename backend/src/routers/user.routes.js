const { Router } = require("express");
const { signIn, signUp } = require("../controller/user.ctrl");
const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;
