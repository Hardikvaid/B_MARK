const multer = require("multer");

// Configure storage (store file in memory as buffer)
const storage = multer.diskStorage({
    destination: function (req, file, cb){
     return cb(null,"./uploads");
    },
     filename:function(req, file, cb){
        return cb(null,`${Date.now()}-${file.originalname}`);
       }
});

const upload = multer({ storage });

module.exports = upload;
