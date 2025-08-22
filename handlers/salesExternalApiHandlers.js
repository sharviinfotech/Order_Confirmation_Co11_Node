module.exports = (() => {
  const salesExternalApiMethods = require("../apiMethods/salesExternalApiMethods");

  return {
    delivery: (req, res) => salesExternalApiMethods.delivery(req.body, res),
  };
})();
