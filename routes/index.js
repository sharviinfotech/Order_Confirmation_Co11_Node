module.exports = (() => {
  const express = require("express");
  const router = express.Router();

  // Import route files
  const userRoutes = require("./userRoutes");
  const productRoutes = require("./productRoutes");

  const externalRoutes = require("./externalRoutes");
  const pRRoutes = require("./PRRoutes");
  const salesRoutes = require("./salesRoutes");
  const PPRoutes = require("./ppRoutes");
  // Attach external routes
  router.use("/external", externalRoutes);

  router.use("/Prexternal", pRRoutes);

  router.use("/Salesexternal", salesRoutes);

  router.use("/PPexternal", PPRoutes);

  return router;
})();
