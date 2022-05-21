const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();


exports.handler = async (event) => {
  console.log(event)
  try {
    await createItem()
    return { body: 'Successfully created item!' }
  } catch (err) {
    return { error: err }
  }
}

console.log(event.formId)
const params = {
  TableName: 'serverlessrepo-AestheticsFormDB-FormDataTable-1M0ZV9SXX6E4S',
      Item: {
      formId : "5",
    	CreditApp : "fdasa",
    	FollowUp : "event.followUp",
    	Injectables : "event.injectables",
    	Marketing : "event.marketing",
    	MeetAgain : "event.meetAgain",
    	MeetingRating : "event.scale",
    	NoOfPatients : "event.patientCount",
    	ReachOut : "event.reachOut",
    	SoloOwner : "event.soloOwner"
  }
}

async function createItem(){
  try {
    await docClient.put(params).promise();
  } catch (err) {
    return err;
  }
}

;
