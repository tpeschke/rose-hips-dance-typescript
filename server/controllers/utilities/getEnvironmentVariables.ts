import { Environment } from "@paypal/paypal-server-sdk"
import { CLIENT_ID, CLIENT_SECRET, ENVIRONMENT } from "../../server-config"

interface FunctionReturn {
    environment: Environment,
    clientID: string,
    clientSecret: string,
    endpointURL: string
}

export default function getEnvironmentVariables(): FunctionReturn {
    const environment = ENVIRONMENT as Environment ?? Environment.Sandbox

    return {
        environment,
        clientID: CLIENT_ID ?? '',
        clientSecret: CLIENT_SECRET ?? '',
        endpointURL: environment === Environment.Sandbox ? 'https://sandbox.paypal.com' : 'https://api-m.paypal.com'
    }
}