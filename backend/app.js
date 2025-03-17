const express = require("express");
const cors = require("cors");
const connectDB = require("./db/DBConnection");
const productRoutes = require("./routes/ProductRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to database
connectDB();

// Routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("Server is running");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
