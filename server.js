const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const LOCATION = { city: "Boston", region: "MA", country: "USA" };

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.json({
    status: "Available",
    message: "Boston API is working correctly",
    location: LOCATION,
    timestamp: Date.now(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
