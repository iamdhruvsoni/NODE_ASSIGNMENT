const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const apiroutes = require("./routes/apiroutes");
app.use("/api", apiroutes);

app.listen(4000, () => {
  console.log("Listening to port 4000!");
});
