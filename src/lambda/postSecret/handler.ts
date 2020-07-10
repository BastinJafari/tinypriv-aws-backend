import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import saveSecret from '@src/utils/saveSecret';

export default async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => (
  {
    statusCode: 200,
    body: JSON.stringify({
      environment: process.env,
    }),
  }
);
