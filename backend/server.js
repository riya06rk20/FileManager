const express = require("express");
const cors = require("cors");
const scanRoutes = require("./routes/scan");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/scan", scanRoutes);

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
