import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';


export class CdkbasicsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const s3_bucket = new s3.Bucket(this, 'MyFirstBucket');
    

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkbasicsQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
