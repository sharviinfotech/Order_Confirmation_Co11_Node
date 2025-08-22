module.exports = (() => {
    const userMethods = require('../apiMethods/userMethods');

    return {
        getAllUsers: (req, res) => userMethods.getAllUsers(req, res),
        createUser: (req, res) => userMethods.createUser(req, res),
    };
})();
