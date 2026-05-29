require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
res.json({
success: true,
message: "Royal Mix Global Production API Live"
});
});

app.get("/api/health", (req, res) => {
res.json({
status: "healthy",
platform: "Royal Mix Global"
});
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
console.log("Royal Mix Global API running on port ${PORT}");
});
