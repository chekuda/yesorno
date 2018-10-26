const path = require('path')
const fs = require('fs')

module.exports = ({ content = 'Its Running', store = '', title = '' }) =>
  new Promise((resolve, reject) => {
    const indexFile = path.resolve(__dirname, '../../../dist/publicIndex.html')

    fs.readFile(indexFile, 'utf8', (err, data) =>
      err
        ? reject(err)
        : resolve(data.replace('data-content', content).replace('data-title', title))
    )
  })