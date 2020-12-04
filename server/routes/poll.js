const router = require('express').Router();
const handle = require('../handlers/error_handle')
const auth = require('../middlewares/authentication');

router.route('/').get(handle.showPolls).post(auth, handle.createPolls);

router.get('/user', auth, handle.usersPolls);

router.route('/:id').get(handle.getPoll).post(auth, handle.vote).delete(auth, handle.deletePoll);

module.exports = router;