import * as cdk from '@aws-cdk/core';
import { SampleCDKStack } from '../lib/sample.cdk-stacks';


const app = new cdk.App();

new SampleCDKStack(app, 'SampleTesting', {
  envName: 'dev',
});

new SampleCDKStack(app, 'SampleProduction', {
  envName: 'production',
});