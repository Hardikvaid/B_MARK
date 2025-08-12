// require("dotenv").config();
require("dotenv").config({
  path: "config/.env",
});
const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      // console.log(`mongod connected with server: ${data.connection.host}`);
      console.log(`Database connected successfully 🥳🚀🚀🎉`)
    });
};

module.exports = connectDatabase;
