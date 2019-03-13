
const fs = require('fs');

const csvToJson = (pathFile) => {
  const file = fs.readFileSync(pathFile, {encoding: 'utf8'}).split('\r\n')
  const titles = file[0].split(',')
  
  const values = file.slice(1).map(value => {
    return value.split(',');
  })

  let json = values.map(value => {
    let obj = {}
    value.map((el, idx) => {
      obj[titles[idx]] = el
    })

    return obj
  })

  fs.writeFileSync(pathFile.replace('csv','json'), JSON.stringify(json))
}

module.exports = csvToJson;

if(process.argv[2] === undefined) {
    console.log('Please, enter with a CSV file')
} else {
    csvToJson(process.argv[2])
}