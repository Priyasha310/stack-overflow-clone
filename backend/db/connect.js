const mongoose = require('mongoose')

const connectDB = (url) => mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log("DB Connetion unsuccessfull", err.message);
  });

module.exports = connectDB
