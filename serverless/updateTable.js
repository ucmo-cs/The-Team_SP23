'use strict'

const AWS = require('aws-sdk')

const db = new AWS.DynamoDB.DocumentClient()

  exports.updateTable = async (event, item) => {
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      };
    let statusCode = 200;

    const tableName = event.pathParameters.model
    const id = event.pathParameters.id;

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

    /*
    const itemKeys = Object.keys(event.body).filter(k => k !== id);
        const params = {
            TableName: table,
            UpdateExpression: `SET ${itemKeys.map((k, index) => `#field${index} = :value${index}`).join(', ')}`,
            ExpressionAttributeNames: itemKeys.reduce((accumulator, k, index) => ({
                ...accumulator,
                [`#field${index}`]: k
            }), {}),
            ExpressionAttributeValues: itemKeys.reduce((accumulator, k, index) => ({
                ...accumulator,
                [`:value${index}`]: event.body[k]
            }), {}),
            Key: {
                "id": id
            },
                ReturnValues: 'ALL_NEW'
            };
    */

    const params = {
        TableName: table,
        Key: {
            "id": id
        },
        UpdateExpression: "set #MyVariable = :x",
        ExpressionAttributeNames: {
            "#MyVariable": "empName"
        },
        ExpressionAttributeValues: {
            ":x": "ddddd",
        }
    };

    db.update(params, function(err, data) {
        if (err) console.log("ERROR: ",err);
        else console.log("DATA: ", data);
    });
    
    /*
    try {
    await db.update(params).promise().then(res => {
        callback(null, {
            statusCode,
            headers,
            body: JSON.stringify({message: 'Created Entry Successfully!'})
        });
    }).catch(err => {
        console.log(err);
        callback(null, {
            statusCode: 500,
            headers,
            body: JSON.stringify({message: 'Unable to Create Entry'})
        });
    });
    } catch (err) {
        return { error: err }
    }
    */
}