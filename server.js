const db = require("./config/db.js");
const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes.js");
const noteRoutes= require("./routes/noteRoutes.js");
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/notes",noteRoutes);
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})