const express = require(`express`)

const {
    createFriend,
    getFriend,
    getFriends,
    updateFriend,
    deleteFriend,
    search
} = require(`../controller/friend`)

const router = express.Router()

router.get(`/`, getFriends)
router.post(`/`, createFriend)
router.get(`/:personId`, getFriend)
router.put(`/:personId`, updateFriend)
router.delete(`/:personId`, deleteFriend)
router.get(`/search/all`, search)


module.exports = router