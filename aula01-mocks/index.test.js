 const File = require("./src/file")
 const { error } = require("./src/constants")
 const assert = require('assert')

 // IFEE
 ;(async () => {
  // variaveis criadas nesse bloco, só são validas durante sua execusão
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/invalid-headers.csv'
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/fiveItems-invalid.csv'
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/threeItems-valid.csv'
    const expected = [
      {
        id: 1,
        name: "luffy monky",
        profession: "pirate",
        age: 120
      },
      {
        id: 2,
        name: "gabriel gonçalves",
        profession: "fisioterapeuta",
        age: 18
      },
      {
        id: 3,
        name: "guilherme",
        profession: "software enginier",
        age: 21
      },
    ]
    const result = await File.csvToJSON(filePath)
    assert.deepEqual(result, expected)
  }
  
 })()