// require("dotenv").config();
require("dotenv").config({
  path: "config/.env",
});
const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/B_MARK1", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      // console.log(`mongod connected with server: ${data.connection.host}`);
      console.log(`Database connected successfully 🥳🚀🚀🎉`)
    });
};

module.exports = connectDatabase;
