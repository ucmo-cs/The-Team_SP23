'use strict'

const uuid = require('uuid')
const AWS = require('aws-sdk')

let options = {}
if (process.env.IS_OFFLINE) {
    options = {
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    }
}

const db = new AWS.DynamoDB.DocumentClient()
const TableName = process.env.SELF_TABLE;

exports.createSAT = async (event, context, callback) => {
  let headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  };
  let statusCode = 200;
  
  const data = JSON.parse(event.body);
  console.log("EVENT:::", data);

  //create new timestamp value
  let d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let ts = h + ':' + m;
  //create new date value
  let MM = addZero(d.getMonth()+1);
  let dd = addZero(d.getDate());
  let y = d.getFullYear();
  let dt = y + '-' + MM + '-' + dd;

  const params = {
    TableName,
    Item: {
      id: uuid.v1(),
      createdDate: dt,
      createdTimestamp: ts,
      empName: data.empName,
      dateCompleted: data.dateCompleted,
      accomplishmentOne: data.accomplishmentOne,
      accomplishmentTwo: data.accomplishmentTwo,
      accomplishmentThree: data.accomplishmentThree,
      biggestTakeAway: data.biggestTakeAway,
      hardTask: data.hardTask,
      improvement: data.improvement,
      actions: data.actions,
      barriers: data.barriers,
      milestones: data.milestones,
      accountable: data.accountable,
      neededImprovement: data.positiveExamples,
      imporvementActions: data.improvementExamples,
      positivePreformanceExamples: data.positivePreformanceExamples,
      improvementPreformanceExamples: data.improvementPreformanceExamples,
      strengthen: data.strengthen,
      oneYearGoal: data.oneYearGoal,
      leadershipImprovement: data.leadershipImprovement,
      feedback: data.feedback
    }
  }

  console.log("Creating Personal Development Entry");
  try{
    await db.put(params).promise()
        .then(res => {
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
};

function addZero(i) {
    if (i<10) {
        i = '0' + i;
    }
    return i;
  }