const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://admin:admin123@social-app-2lvf1.mongodb.net/test?retryWrites=true",
{
  useNewUrlParser: true
}
);

app.use(express.json());
app.use(require('./routes'))

app.listen(3000, () => {
  console.log(":) Server started on port 3000");
});


