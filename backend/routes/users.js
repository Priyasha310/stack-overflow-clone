const {getAllUsers} = require('../controllers/users.js');

router.get('/getAllUsers', getAllUsers)

module.exports = router;