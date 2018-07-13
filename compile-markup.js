const { writeFileSync } = require("fs")
const { compileFile } = require("pug")
const locals = require("./pug-variables")
const { publicFolder } = require("./config")

const generate = (input, output) => {
  const html = compileFile(`views/${input}.pug`)(locals)
  writeFileSync(output, html)
}

generate("impressum", publicFolder + "/impressum.html")
generate("index", publicFolder + "/index.html")
