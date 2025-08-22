module.exports = (() => {
    return {
        getAllUsers: (req, res) => {
            res.json({ message: 'Fetched all users successfully' });
        },
        createUser: (req, res) => {
            const { name, email } = req.body;
            res.json({ message: 'User created', data: { name, email } });
        },
    };
})();
