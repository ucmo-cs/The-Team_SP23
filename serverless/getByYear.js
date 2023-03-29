const AWS = require("aws-sdk")

let options = {}
if (process.env.IS_OFFLINE) {
    options = {
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    }
}

const db = new AWS.DynamoDB.DocumentClient()
const tablePDV = process.env.PERSONAL_TABLE

exports.getByYear = async (event, context, callback) => {
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    };
    let statusCode = 200;

    console.log("EVENT:::", JSON.stringify(event));

    const tableName = event.pathParameters.model
    const year = event.pathParameters.year
    let table;
    switch (tableName) {
        case "PDT":
            table = "PersonalDevTable";
            break;
        default:
            throw new Error(`Unsupported resource: "${tableName}"`);
    }

    const params = {
        TableName: table,
        FilterExpression: "begins_with(#createdDate, :year)",
        ExpressionAttributeNames: {
            "#createdDate": "createdDate"
        },
        ExpressionAttributeValues: {
            ":year": year,
        }
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
            body: JSON.stringify(data)
        }
        callback(null, response);
    }).promise();

    /*
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
    */
};