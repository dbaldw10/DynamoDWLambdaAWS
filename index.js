const AWS = require("aws-sdk");
// Set the region 
AWS.config.update({region: 'us-east-2'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = async (event) => {
 console.log('EVENT: ', event)

var params = {
  TableName: 'serverlessrepo-AestheticsFormDB-FormDataTable-1M0ZV9SXX6E4S',
  Item: {
    'formId' : {S: formId},
    'CreditApp' : {S: event.creditPractice},
    'FollowUp' : {S: event.followUp},
    'Injectables' : {S: event.Injectables},
    'Marketing' : {S: event.marketing},
    'MeetAgain' : {S: event.meetAgain},
    'MeetingRating' : {N: event.scale},
    'NoOfPatients' : {N: event.patientCount},
    'ReachOut' : {S: event.reachOut},
    'SoloOwner' : {S: event.soloOwner},
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
}
