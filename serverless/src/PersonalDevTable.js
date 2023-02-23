const { v4 } = require("uuid")
const AWS = require("aws-sdk")

const db = new AWS.DynamoDB.DocumentClient()
const TableName = process.env.PERSONAL_TABLE

const addPersonalDevTable = async (event) => {
    
    const { personalDevTable } = JSON.parse(event.body);
    const id = v4();

    const newPersonalDevTable = {
        id,
        personalDevTable,
        completed: false
    }

    await db.put({
      TableName,
      Item: newPersonalDevTable,
    }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(newPersonalDevTable),
  };
};

const listPersonalDevTable = async (event) => {

    let personalDevTables

    try {
        const results = await db.scan({TableName,}).promise()
        personalDevTables = results.Items
    } catch (error) {
        console.log(error)
    }
  
    return { statusCode: 200, body: JSON.stringify(personalDevTables) };
};

const getPersonalDevTable = async (event) => {

  const {id} = JSON.parse(event.body);
  let personalDevTable

  try {
      const result = await db.get({TableName, Key: {id}}).promise()
      personalDevTable = result.Item
  } catch (error) {
      console.log(error)
  }

  return { statusCode: 200, body: JSON.stringify(personalDevTable) };
};

const deletePersonalDevTable = async (event) => {
  const {id} = JSON.parse(event.body);

    try {
        await db.delete({
            TableName,
            Key: {id}
          }).promise()
    } catch (error) {
        console.log(error)
    }
    
  
    return { statusCode: 200 };
};
  

module.exports = {
  create: addPersonalDevTable,
  list: listPersonalDevTable,
  delete: deletePersonalDevTable,
  getByID: getPersonalDevTable
}
