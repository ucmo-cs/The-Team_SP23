'use strict'

const AWS = require('aws-sdk')

const db = new AWS.DynamoDB.DocumentClient()

const generateUpdateQuery = (fields) => {
    let exp = {
        UpdateExpression: 'set',
        ExpressionAttributeNames: {},
        ExpressionAttributeValues: {}
    }
    Object.entries(fields).forEach(([key, item]) => {
        exp.UpdateExpression += ` #${key} = :${key},`;
        exp.ExpressionAttributeNames[`#${key}`] = key;
        exp.ExpressionAttributeValues[`:${key}`] = item
    })
    exp.UpdateExpression = exp.UpdateExpression.slice(0, -1);
    return exp
}


  exports.updateTable = async (event, context, callback) => {
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      };
    let statusCode = 200;

    const tableName = event.pathParameters.model
    const id = event.pathParameters.id;
    const data = JSON.parse(event.body);

    let table;
    switch (tableName) { //If you have other tables you would add them here as other case statements to reference that table.
        case "PDT":
            table = "PersonalDevTable";
            break;
        case "SAT":
            table = "SelfAssementTable";
            break;
      case "PET":
            table = "PreformanceEvaluationTable";
            break;
      default:
            throw new Error(`Unsupported resource: "${modelName}"`);
    }

    let expression = generateUpdateQuery(data)
    const params = {
        TableName: table,
        Key: {
            "id": id
        },
        ...expression,
        ReturnValues: 'ALL_NEW'
    };
    console.log(params)
    
    
    await db.update(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(null, {
              statusCode: error.statusCode || 501,
              headers: { 'Content-Type': 'text/plain' },
              body: 'Couldn\'t update the card',
            });
            return;
          }

          callback(null, {
            statusCode: 200,
            body: JSON.stringify(result.Attributes),
          });
    }).promise();
    
}