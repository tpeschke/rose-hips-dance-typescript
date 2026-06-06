import { OrdersController, ApiError, Client, LogLevel, CheckoutPaymentIntent, PurchaseUnitRequest } from "@paypal/paypal-server-sdk";
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

interface CreateRequest extends Request {
    body: {
        cart: PurchaseUnitRequest[]
    }
}

const getOrderDetailsFromPayPal = async (cart: PurchaseUnitRequest[]): Promise< any | undefined > => {
    const collect = {
        body: {
            intent: CheckoutPaymentIntent.Capture,
            purchaseUnits: cart,
        },
        prefer: "return=minimal",
    };

    try {
        const { body } = await ordersController.createOrder(collect);
        return JSON.stringify(body);
    } catch (error) {
        if (error instanceof ApiError) {
            // const { statusCode, headers } = error;
            throw new Error(error.message);
        }
    }
};

export async function createOrder(request: CreateRequest, response: Response) {
    try {
        // use the cart information passed from the front-end to calculate the order amount details
        const { cart } = request.body;
        const orderDetails = await getOrderDetailsFromPayPal(cart);
        if (orderDetails) {
             return response.send(orderDetails)
        } else {
            return response.send({ error: "Failed to create order." })
        }
    } catch (error) {
        return response.send({ error: "Failed to create order." })
    }
}