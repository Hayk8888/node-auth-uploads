const  path = require("path");
const  fs = require("fs");
const  multer = require("multer");

const storage =  multer.diskStorage({
    destination:  function(req, file, cb) {
        const directoryPath = path.join(__dirname, '..',  'uploads');

        fs.mkdir(directoryPath, {recursive: true}, (err) => cb(err, directoryPath))
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname.match(/\.([^.]+)$/)[0])
}
});

const  upload = multer({
    storage:  storage
});

module.exports = upload
