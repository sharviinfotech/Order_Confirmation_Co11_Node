module.exports = (() => {
    const express = require("express");
    const router = express.Router();
    const externalApiHandler = require("../handlers/ppApiHanlder");
  
    // Define routes
    router.post("/c011nPrint", externalApiHandler.c011nPrint); // Delivery Report
  
    return router;
  })();
  