//const { join } = require("path")
const express = require("express")
const logger = require("morgan")
const locals = require("./pug-variables")

const e = express()

//e.use("/vendor", express.static(join(__dirname, "node_modules/")))
e.use(logger("dev"))
e.set("view engine", "pug")
e.set("views", "views")

e.get("/", (req, res) => res.render("index.pug", locals))

e.use(express.static("./public"))
e.listen(3001)

module.exports = e
