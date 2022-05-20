const AWS = require("aws-sdk");
// Set the region 
AWS.config.update({region: 'us-east-2'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = async (event, context) => {
 
  let requestJSON = JSON.parse(event.body);

}
var params = {
  TableName: 'serverlessrepo-AestheticsFormDB-FormDataTable-1M0ZV9SXX6E4S',
  Item: {
    'formId' : {S: `${JSON.stringify(event.body.formId)}`},
    'CreditApp' : {S: `${JSON.stringify(event.body.creditPractice)}`},
    'FollowUp' : {S: `${JSON.stringify(event.body.followUp)}`},
    'Injectables' : {S: `${JSON.stringify(event.body.injectables)}`},
    'Marketing' : {S: `${JSON.stringify(event.body.marketing)}`},
    'MeetAgain' : {S: `${JSON.stringify(event.body.meetAgain)}`},
    'MeetingRating' : {N: `${JSON.stringify(event.body.scale)}`},
    'NoOfPatients' : {N: `${JSON.stringify(event.body.patientCount)}`},
    'ReachOut' : {S: `${JSON.stringify(event.body.reachOut)}`},
    'SoloOwner' : {S: `${JSON.stringify(event.body.soloOwner)}`},
  }
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
