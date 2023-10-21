const Router = require("express");
const router = new Router;
const controller = require("../controllers/authController");
const authValidator = require("../middleware/authValidator")
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")
const uploader = require("../middleware/fileuploader");
const catchupload = require("../middleware/catchfile");
const FileController = require("../controllers/fileController");
const updateFileController = require("../controllers/updateFileController")


router.post('/registration', authValidator, controller.registration);
router.post('/login', controller.login);
router.get('/admin', authMiddleware, roleMiddleware(["ADMIN"]), controller.getUser);
router.post("/uploads", authMiddleware, catchupload, FileController.codeupload, (req, res) => {
    res.status(200)
});
router.patch('/updatefile', authMiddleware, updateFileController.updatefile )


module.exports = router;