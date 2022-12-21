const express = require("express")
const app = express();
const path = require("path");
const hbs = require("hbs");
const PORT = 4000;

const viewpath = path.join(__dirname, "../templetes/views")
app.set("view engine", "hbs")
app.set("views", viewpath)

const publicpath = path.join(__dirname, "public")
app.use(express.static(publicpath))

app.get("/", (req, resp) =>{
    resp.render("wolrd")
})
app.get("/wolrd", (req, resp) => {
    resp.render("wolrd")
})
app.listen(PORT, () => {
    console.log("server runing on port: " + PORT);
})