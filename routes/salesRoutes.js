module.exports = (() => {
  const express = require("express");
  const router = express.Router();
  const externalApiHandler = require("../handlers/salesExternalApiHandlers");

  // Define routes
  router.post("/delivery", externalApiHandler.delivery); // Delivery Report

  return router;
})();
