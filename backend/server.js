const app = require("./app");
const connectDatabase = require("./db/Database");
const cloudinary = require("cloudinary");
// require("dotenv").config();
// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

// config
// if (8000 !== "PRODUCTION") {
//   require("dotenv").config({
//     path: "config/.env",
//   });
// }

// connect db
connectDatabase();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// })


// create server
const server = app.listen(5000, () => {
  console.log(
    `Server is running on http://localhost:5000`
  );
});

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  // console.log(`shutting down the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
