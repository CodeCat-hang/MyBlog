const express = require('express')
const app = express()

app.set("secret", "15756160120");

app.use(require('cors')());
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/", express.static(__dirname + "/web"));
app.use("/admin", express.static(__dirname + "/admin"));

require("./plugins/db")(app);
require("./routes/admin")(app);
require("./routes/web")(app);

app.listen(3000, async(req, res) => {
    console.log("http://localhost:3000");
});