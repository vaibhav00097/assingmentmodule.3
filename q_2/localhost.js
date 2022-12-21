const express = require("express")
const app = express();
const path = require("path")
const PORT = 5000;

const viewpath = path.join(__dirname, "../templetes/view")
app.set("view engine")
app.set("views",viewpath)

app.get("/", (req, resp) => {
    resp.render("local")
})

app.listen(PORT, () => {
    console.log("server runing on port: " + PORT);
})
