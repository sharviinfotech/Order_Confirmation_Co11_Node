module.exports = (() => {
    const express = require('express');
    const router = express.Router();
    const userHandler = require('../handlers/userHandler');

    // Define routes
    router.get('/', userHandler.getAllUsers);
    router.post('/', userHandler.createUser);

    return router;
})();
