'use strict'

const AWS = require("aws-sdk")

const db = new AWS.DynamoDB.DocumentClient()
const tablePDV = process.env.PERSONAL_TABLE

exports.listItems = async (event, context, callback) => {
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    };
    let statusCode = 200;

    console.log("EVENT:::", JSON.stringify(event));

    const tableName = event.pathParameters.model
    let table;
    switch (tableName) {
        case "PDT":
            table = tablePDV;
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