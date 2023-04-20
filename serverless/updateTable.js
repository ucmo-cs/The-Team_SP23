'use strict'

const AWS = require('aws-sdk')

  exports.updateTable = async (event, context, callback) => {
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      };
    let statusCode = 200;

    const tableName = event.pathParameters.model
    const id = event.pathParameters.id;

    const { paramsName } = event.body;
    const { paramsValue } = event.body;

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
        TableName: table,
        Key: {
            'id': id,
        },
        ConditionExpression: 'attribute_exisits(id)',
        UpdateExpression: 'set #paramName = :paramsValue',
        ExpressionAttributeNames: {
            '#paramName': paramsName
        },
        ExpressionAttributeValues: {
            ':paramsValue': paramsValue
        },
        ReturnValues: 'ALL_NEW'
    }
    /*
      statusCode,
                headers,
                body: JSON.stringify({message: 'Updated Entry Successfully!'})
            });}).catctry{
        await db.update(params).promise()
        .then(res => {
            callback(null, {
              h(err => {
                console.log(err);
                callback(null, {
                    statusCode: 500,
                    headers,
                    body: JSON.stringify({message: 'Unable to Update Entry'})
                });
            });
    } catch (err) {
        return { error: err }
    }
    */
    return db.update(paramse).promise.then(response => {
        return response.Attributes;
    })

}