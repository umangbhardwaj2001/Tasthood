const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.get("/fetch-data", async (req, res) => {
  try {
    // lat=12.9351929&lng=77.62448069999999
    // lat=28.65420&lng=77.23730
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
