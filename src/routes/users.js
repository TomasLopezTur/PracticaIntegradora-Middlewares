const router = require ('express').Router();
const {register, login} = require('../controllers/userController')

/* /products */
router 
    .get('/register', register)
    .get('/login', login)


module.exports= router;