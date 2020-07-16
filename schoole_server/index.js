const express = require("express");
const app = express();
const pool = require("./startup/database");

require("./startup/routes")(app);
require("./startup/config")();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
