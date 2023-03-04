const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/a", userController.addToLikedMovies);
router.get("/g/:email", userController.getLikedMovies);
router.put("/d", userController.removeFromLikedMovies);

module.exports = router;