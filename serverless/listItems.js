'use strict'

const AWS = require("aws-sdk")

let options = {}
if (process.env.IS_OFFLINE) {
    options = {
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    }
}

const db = new AWS.DynamoDB.DocumentClient()
const pdtTable = process.env.PERSONAL_TABLE;
const selfTable = process.env.SELF_TABLE;
const preformanceTable = process.env.PREFORMANCE_TABLE;

exports.listItems = async (event, context, callback) => {
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    };
    let statusCode = 200;

    console.log("EVENT:::", JSON.stringify(event));

    const tableName = event.pathParameters.model
    let year = event.pathParameters.year;
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

    const params = {
        TableName: table
    }

    console.log("Getting Items from table:::", table);

    await db.scan(params, (error, data) => {
        if (error) {
            console.log('Scan failed. Error JSON:', JSON.stringify(error, null, 2));
            callback(error);
            return;
        }
        const response = {
            statusCode,
            headers,
            body: JSON.stringify(data.Items)
        }

        callback(null, response);
    }).promise();

};