module.exports = (() => {
  const express = require("express");
  const router = express.Router();
  const externalApiHandler = require("../handlers/externalApiHandler");

  // Define routes
  router.post("/Login", externalApiHandler.Login);

  //UCL
  router.put("/getLotReports", externalApiHandler.getLotReports);

  router.post("/resultrecord", externalApiHandler.updateResultRecording);
  router.post("/UDsubmitResult", externalApiHandler.UDsubmitResult);
  router.post("/reportZQAR", externalApiHandler.reportZQAR); //quality reports
  router.post("/reportZQA32", externalApiHandler.reportZQA32); //pending lot reports
  router.post("/ZPRDID", externalApiHandler.ZPRDID);
  router.post("/typeTest", externalApiHandler.typeTest);
  router.post('/coois/orderconfirmation',externalApiHandler.OrderConfirmation);
  return router;
})();
