const router = require('express').Router();
const {index, admin, not_entry} = require('../controllers/mainController');
const accessAdmin = require('../middleware/accessAdmin');

router
    .get('/', index)
    .get('/admin',accessAdmin ,admin)
    .get('/not-entry', not_entry)

module.exports = router;