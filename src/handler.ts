import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import postSecret from '@src/lambda/postSecret/handler';

export const hello: APIGatewayProxyHandler = async (event, _context) => (
  {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
      context: _context,
    },
    null, 2),
  }
);

export { postSecret };
