const fs = require("fs")

fs.rename("joe", "jane", error => console.error(error))