const Files = require("../models/Files");
const  fs = require("fs");
const path = require("path");
class FileController {

    async codeupload(req, res) {
        try {
            const user = req.user;
            const {filename, code} = req.body;

              const  userDirectory = path.join(__dirname, "..", "uploads",  user._id.toString());
              if(!fs.existsSync(userDirectory)) {
                   fs.mkdirSync(userDirectory);
            }
              const  filePath = path.join(userDirectory, filename);


              if (fs.existsSync(filePath)){
                  return res.status(400).json({ message: "file is  exists" });
              }


              fs.writeFileSync(filePath, code);



            const file = new Files({
                file: filename,
                userId: user._id
            });

            await file.save();

            res.status(201).json({message: "File upload  successful"});
        } catch (error) {
            console.error("Error", error)
            res.status(500).json({error: "internal server error"})
        }
    }
}

module.exports = new FileController();
