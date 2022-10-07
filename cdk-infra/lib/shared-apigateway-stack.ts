import * as cdkUtil from './cdkUtil'
import { HttpApi } from '@aws-cdk/aws-apigatewayv2-alpha';
import * as cdk from 'aws-cdk-lib';
import {exportedApiGatewayId} from "./cdkUtil";

export class SharedApiGatewayStack extends cdk.Stack {

    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const apiGateway = new HttpApi(this, cdkUtil.apiGatewayId, {
            apiName: cdkUtil.apiGatewayId,
            description: 'Labsys Microservices APIs',
        });
        cdkUtil.tagItem(apiGateway, cdkUtil.apiGatewayId);

        new cdk.CfnOutput(this, cdkUtil.exportedApiGatewayId, {
            exportName: exportedApiGatewayId,
            value: apiGateway.apiId,
        });
    }

}