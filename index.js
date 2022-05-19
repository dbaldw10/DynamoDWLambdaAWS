var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-2'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: 'serverlessrepo-AestheticsFormDB-FormDataTable-1M0ZV9SXX6E4S',
  Item: {
    'formId' : {N: '002'},
    'CreditApp' : {S: 'Yes'},
    'followUp' : {S: 'Yes'},
    'injectables' : {S: 'Yes'},
    'marketing' : {S: 'Yes'},
    'meetAgain' : {S: 'Yes'},
    'meetingRating' : {N: '8'},
    'NoOfPatients' : {N: '500'},
    'ReachOut' : {S: 'Yes'},
    'SoloOwner' : {S: 'Yes'},
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