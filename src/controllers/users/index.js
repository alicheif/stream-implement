const express = require('express')
const asyncHandler = require('../../utils/routerMethods');
const userService = require("../../services/users")

const router = express.Router();

router.get(
    '/', 
    asyncHandler(async (req, res) => {
        const userDetails = await userService.getAllUsers();
        return res.send(userDetails);
    })
)
router.get(
    '/test', 
    asyncHandler(async (req, res) => {
        //const userDetails = await userService.getAllUsers();
        return res.send("Working successfully");
    })
)
router.get(
    '/dept',
    asyncHandler(async (req, res) => {
        const userByBity = await userService.getUserByCity()
        return res.send(userByBity)
    })
)
module.exports = router