const express = require("express");
const cors = require("cors");
import pickupLinesByCategory from "./pickupLinesByCategory";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Sample data source (you can replace this with a database)
// const pickupLinesByCategory = {
//   funny: ["Line 1", "Line 2", "Line 3"],
//   romantic: ["Line 4", "Line 5", "Line 6"],
// };

// Define a route to get a random pickup line by category
app.get("/api/pickup-line/:category", (req, res) => {
  const { category } = req.params;
  const lines = pickupLinesByCategory[category] || [];
  const randomLine = lines[Math.floor(Math.random() * lines.length)];

  res.json({ pickupLine: randomLine });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
