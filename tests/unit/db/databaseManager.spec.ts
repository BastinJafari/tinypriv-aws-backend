import AWS from 'aws-sdk'
import '../../config' 

//import { assert } from "chai"

import * as databaseManager from "../../../src/utils/databaseManager"

beforeAll(() => {
  const dynamo = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  });

  databaseManager.initializeDynamoClient(dynamo);
})


afterAll(() => {

})

describe('Test database save and get item', () => {
  const secret = {
    key: '123798uspaidfj',
    url: 'www.test.de',
    message: 'testMessage'
  }

  it('saves a secret', done => {
    databaseManager.saveSecret(secret).then(result => {
      console.log(result);
      done()
    })
  })
});
