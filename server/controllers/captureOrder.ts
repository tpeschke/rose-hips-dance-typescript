import { ApiError, Client, LogLevel, OrdersController } from "@paypal/paypal-server-sdk";
import getEnvironmentVariables from "./utilities/getEnvironmentVariables";
import { Request, Response } from '../apiInterfaces/apiInterfaces'

const {
    clientID,
    clientSecret,
    environment
} = getEnvironmentVariables()

const client = new Client({
    clientCredentialsAuthCredentials: {
        oAuthClientId: clientID,
        oAuthClientSecret: clientSecret,
    },
    timeout: 0,
    environment,
    logging: {
        logLevel: LogLevel.Info,
        logRequest: { logBody: true },
        logResponse: { logHeaders: true },
    },
});

const ordersController = new OrdersController(client);

const sendOrderToPayPal = async (orderID: string)
    : Promise<
        any | undefined
    > => {
    const collect = {
        id: orderID,
        prefer: "return=minimal",
    };

    try {
        const { body } = await ordersController.captureOrder(
            collect
        );
        // Get more response info...
        // const { statusCode, headers } = httpResponse;
        return JSON.stringify(body);
    } catch (error) {
        if (error instanceof ApiError) {
            // const { statusCode, headers } = error;
            throw new Error(error.message);
        }
    }
};

interface CaptureRequest extends Request {
    params: {
        orderID: string
    }
}

export async function captureOrder(request: CaptureRequest, response: Response) {
    try {
        const { orderID } = request.params;
        const orderDetails = await sendOrderToPayPal(orderID);
        if (orderDetails) {
            return response.send(orderDetails)
        } else {
            return response.send({ error: "Failed to create order." })
        }
    } catch (error) {
        return response.send({ error: "Failed to create order." })
    }
};