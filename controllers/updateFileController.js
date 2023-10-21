const Files = require("../models/Files");
const  fs = require("fs");
const path = require("path");

const  filename = require("./fileController");


class updateFile {
    ;
      async updatefile (req, res) {
          try{
              const user = req.user;
              const {filename, code} = req.body;

              const newContent = req.body.newContent;
              const filePath = {filename, code};


              if(fs.existsSync(this.fiilePath)) {
                  fs.writeFileSync(filePath, newContent);
                  res.json({message: "file update succesful"});
              }else{
                  res.status(400).json({error:  "file not  update"})
              }
          }catch(err){
              res.status(500).json({error:  err.message})
          }
      }
}

module.exports = new updateFile();
