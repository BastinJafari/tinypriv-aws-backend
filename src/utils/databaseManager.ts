import Secret from '@src/utils/interfaces/secret';
import AWS from 'aws-sdk';

// export default (secret: Secret): string => 'tinypriv.com/Test';


const { TABLE_NAME } = process.env;

let dynamo = new AWS.DynamoDB.DocumentClient();

export const initializeDynamoClient = newDynamo => {
  dynamo = newDynamo;
}

export const saveSecret = (secret: Secret): Promise<string> => {
  const params = {
    TableName: TABLE_NAME,
    Item: secret,
  }

  return dynamo.put(params).promise().then(() => {
    return secret.url;
  })
}