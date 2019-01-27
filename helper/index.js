const fs = require('fs')

function saveDataToFile(data, filePath, callback) {
  fs.writeFile(filePath,
    JSON.stringify(data, null, 2),
    callback
  )
}

module.exports = {
  saveDataToFile: saveDataToFile
}