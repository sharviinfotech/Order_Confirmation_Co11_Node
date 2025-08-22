module.exports = (() => {
    const salesExternalApiMethods = require("../apiMethods/ppApiMethods");
  
    return {
        c011nPrint: (req, res) => salesExternalApiMethods.c011nPrint(req.body, res),
    };
  })();
  