const router = require("express").Router();
const sentenceRoutes = require("./sentences");

// sentence routes
router.use("/sentences", sentenceRoutes);

module.exports = router;
