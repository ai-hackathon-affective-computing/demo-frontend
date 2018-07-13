const { writeFileSync } = require("fs")
const { compileFile } = require("pug")
const locals = require("./pug-variables")

const generate = (input, output) => {
  const html = compileFile(`views/${input}.pug`)(locals)
  writeFileSync(output, html)
}

generate("impressum", "public/impressum.html")
generate("index", "public/index.html")
