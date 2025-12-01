const express = require("express");
const app = express();
const path = require("path");

// Serve static files (CSS, images) from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Route for your HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/layover.html"));
});

// ---- PLACE PORT LISTENER AT THE END ----
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
