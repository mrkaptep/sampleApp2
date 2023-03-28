// import * as cdk from 'aws-cdk-lib';
import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as lambda from '@aws-cdk/aws-lambda';
import * as events from '@aws-cdk/aws-events';
import * as targets from '@aws-cdk/aws-events-targets';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

interface EnvironmentStackProps extends cdk.StackProps {
  envName: string;
}

export class SampleCDKStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: EnvironmentStackProps) {
    super(scope, id, props);
  }

      // Create an S3 bucket
      // const bucket = new s3.Bucket(this, 'Bucket', {
      //   versioned: true,
      //   removalPolicy: cdk.RemovalPolicy.DESTROY,
      // });
  
      // Create a DynamoDB table
      // const table = new dynamodb.Table(this, 'Table', {
      //   partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      //   tableName: `${props.envName}-your-table`,
      //   removalPolicy: cdk.RemovalPolicy.DESTROY,
      // });
  
      // Create a Lambda function
      // const lambdaFunction = new lambda.Function(this, 'Lambda', {
      //   runtime: lambda.Runtime.NODEJS_14_X,
      //   handler: 'index.handler',
      //   code: lambda.Code.fromAsset('lambda'),
      //   environment: {
      //     BUCKET_NAME: bucket.bucketName,
      //     TABLE_NAME: table.tableName,
      //   },
      // });
  
      // Grant permissions to Lambda
      // bucket.grantReadWrite(lambdaFunction);
      // table.grantReadWriteData(lambdaFunction);
  
      // Schedule nightly copy from production to testing environment
    //   if (props.envName === 'testing') {
    //     const copyTableFunction = new lambda.Function(this, 'CopyTableFunction', {
    //       runtime: lambda.Runtime.NODEJS_14_X,
    //       handler: 'copy-table.handler',
    //       code: lambda.Code.fromAsset('lambda'),
    //       environment: {
    //         PROD_TABLE_NAME: 'production-your-table',
    //         TEST_TABLE_NAME: table.tableName,
    //       },
    //     });
  
    //     table.grantReadWriteData(copyTableFunction);
  
    //     const rule = new events.Rule(this, 'NightlyCopyRule', {
    //       schedule: events.Schedule.cron({ minute: '0', hour: '0' }),
    //     });
  
    //     rule.addTarget(new targets.LambdaFunction(copyTableFunction));
    //   }
    // }
}
