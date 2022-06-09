module.exports = (app) => {
    const users = require('../controller/UserController');

    const router = require('express').Router();

    // Create a new Tutorial
    router.post('/', users.create);
    router.get('/', users.findAll);
    router.patch('/update/:email', users.update);
    app.use('/api/user', router);
}