const express = require('express')
const userController = require("./users")

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
router.use('/users', userController)
module.exports = router