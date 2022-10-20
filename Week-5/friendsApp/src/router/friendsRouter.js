const express = require(`express`)

const {
    createFriend,
    getFriend,
    getFriends,
    updateFriend,
    deleteFriend,
    search,
    signIn
} = require(`../controller/friend`)

const router = express.Router()

const verifyToken = require(`../middleware/verifyToken`)

router.get(`/`, verifyToken, getFriends)
router.post(`/login`, signIn)
router.post(`/`, createFriend)
router.get(`/:personId`, getFriend)
router.put(`/:personId`, updateFriend)
router.delete(`/:personId`, deleteFriend)
router.get(`/search/all`, search)


module.exports = router