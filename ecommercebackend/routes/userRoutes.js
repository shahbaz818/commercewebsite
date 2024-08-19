const {
    userRegister,
    adminRegister,
    loginInformation,
    addProducts,
    showProduct,
    deleteProduct,
    showUser,
    deleteUser,
    orderRegister,
    orderShow,
    stripe1,
    webhook


} = require('../controllers/userControllers.js')
const { Router } = require('express')
const express = require('express')
const { jwtMiddleware, generateToken } = require('../jwt.js')
const app = express()
app.use(express.json())
const multer = require('multer')
const path = require('path')
app.use(express.urlencoded({ extended: false }))


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads")
    },

    filename: function(req, file, cb) {
        console.log(file)
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })
console.log(upload)




const router = Router()


router.post('/register', userRegister)
router.post('/registeradmin', adminRegister)
router.post('/login', loginInformation)
router.post('/product', upload.single('file'), addProducts)
router.get('/read', showProduct)
router.delete('/deleteandread/:id', deleteProduct)
router.get('/readUser', showUser)
router.delete('/deleteusers/:id', deleteUser)
router.post('/order')
router.get('/orderread', orderShow)

//stripe api
router.post('/stripe.checkout.sessions', stripe1)
router.post('/webhook', webhook)


module.exports = router