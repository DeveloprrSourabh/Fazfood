const express = require("express");
const cors = require("cors");
const connectToMongo = require("./config/db");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");
const app = express();
app.use(express.json());
app.use(cors());

//DB Connection
connectToMongo();

// User Route
app.use("/api/v1/auth", userRoute);

// Product Route
app.use("/api/v1/product", productRoute);

// Category Route
app.use("/api/v1/category", categoryRoute);

app.listen(8000, () => {
  console.log("Server is Running on Port 8000");
});
