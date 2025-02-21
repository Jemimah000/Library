const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/libraryDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB successfully!"))
.catch(err => console.error("❌ MongoDB connection error:", err));
const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Library Management System is Running!");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
