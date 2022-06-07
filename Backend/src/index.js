const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const port=process.env.PORT || 3012
app.use(cors());
const ProductController = require("./controllers/productcontrollers");

app.get("/", (req, res) => {
  try {
    res.status(200).send("success");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
app.use("/product", ProductController);

module.exports = {app,port};