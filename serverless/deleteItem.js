'use strict';

const AWS = require('aws-sdk');

let options = {}
if (process.env.IS_OFFLINE) {
    options = {
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    }
}

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const pdtTable = process.env.PERSONAL_TABLE; //Grab the table name from env variables defined in serverless.yml
const selfTable = process.env.SELF_TABLE;
const preformanceTable = process.env.PREFORMANCE_TABLE;

exports.delItem = async (event, context, callback) => {
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    };
    let statusCode = 200;

    console.log("EVENT:::", JSON.stringify(event));

    const tableName = event.pathParameters.model
    const id = event.pathParameters.id;
    let table;
    switch (tableName) { //If you have other tables you would add them here as other case statements to reference that table.
        case "PDT":
            table = pdtTable;
            break;
        case "SAT":
            table = selfTable;
            break;
        case "PET":
            table = preformanceTable;
            break;
        default:
            throw new Error(`Unsupported resource: "${modelName}"`);
    }

    const params = {
        TableName: table,
        Key: {
            'id': id,
        }
    }

    console.log("Getting Items from table:::", table);

    await dynamoDb.delete(params, (error, data) => {
        if (error) {
            console.log('Scan failed. Error JSON:', JSON.stringify(error, null, 2));
            callback(error);
            return;
        }
        const response = {
            statusCode,
            headers,
            body: JSON.stringify(data.Item)
        }
        callback(null, response);
    }).promise();
};
