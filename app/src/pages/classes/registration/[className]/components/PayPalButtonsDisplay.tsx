import { OnApproveDataOneTimePayments, PayPalOneTimePaymentButton, PayPalProvider, VenmoOneTimePaymentButton } from "@paypal/react-paypal-js/sdk-v6";
import createOrder from "./utilities/createOrder";
import onApprove from "./utilities/onApprove";
import { ClassInterface } from "../page";
import './PayPalButtonDisplay.css'
import { toast } from "react-toastify";
import axios from "axios";
import RegisterWithCashAndCheck from "./components/RegisterWithCashAndCheck";
import { useNavigate } from "react-router-dom";
import { CLIENT_ID, ENVIRONMENT, SERVER_ENDPOINT } from "../../../../../app-config";
import ImageShell from "../../../../../components/ImageShell/ImageShell";

interface Props {
    classes: ClassInterface[],
    submittedInfo: {
        firstName: boolean,
        lastName: boolean,
        phoneNumber: boolean,
        validPhoneNumber: boolean,
        email: boolean,
        validEmail: boolean,
        classes: boolean,
        hasAgreed: boolean
    },
    registrationInfo: {
        firstName: string | null, lastName: string | null, phoneNumber: string | null, email: string | null, classes: ClassInterface[], hasAgreed: boolean, recommendation: string | null
    }
}

export default function PayPalButtonsDisplay({ classes, submittedInfo, registrationInfo }: Props) {
    const navigate = useNavigate();

    const clientId = ENVIRONMENT === 'Sandbox' ? 'test' : CLIENT_ID

    const total = classes.reduce((currentTotal, { cost }) => currentTotal + cost, 0)
    const items = classes.map(({ title, cost }) => {
        return {
            name: title,
            unitAmount: {
                currencyCode: "USD",
                value: `${cost}`,
            },
            quantity: "1",
            description: "",
            sku: title,
        }
    })

    const cart = [
        {
            amount: {
                currencyCode: "USD",
                value: `${total}`,
                breakdown: {
                    itemTotal: {
                        currencyCode: "USD",
                        value: `${total}`,
                    },
                },
            },
            items
        }
    ]

    const onApproveAndRerouteOnSuccess = async (inputData: OnApproveDataOneTimePayments, hasPaid: boolean): Promise<void> => {
        const result = await onApprove(inputData)
        if (result) {
            approvedWithoutPaying(hasPaid)
        }
    }

    const approvedWithoutPaying = async (hasPaid: boolean) => {
        const classTitles = registrationInfo.classes.map(({ title }) => title)

        const { status } = await axios.post(SERVER_ENDPOINT + '/api/register', {
            ...registrationInfo,
            classes: classTitles,
            hasPaid,
            amount: total
        })

        switch (status) {
            case 201:
                toast.success("You're Registered!")
                break;
            default:
                toast.info(`Status: ${status}`)
        }
        const params = new URLSearchParams({
            classes: classTitles.join(','),
        });

        navigate('/classes/welcome?' + params.toString())
    }

    return (
        <div className="paypal-buttons">
            <div>
                <ImageShell src="venmo" alt={"Venmo QR Code"} width={206} height={260} />

                <p>For PayPal: @TiarraStout</p>
            </div>


            {/* <PayPalProvider
                clientId={clientId}
                components={["paypal-payments", "venmo-payments"]}
                pageType="checkout"
            >
                <PayPalOneTimePaymentButton
                    createOrder={() => createOrder(cart)}
                    onApprove={(inputData: OnApproveDataOneTimePayments) => onApproveAndRerouteOnSuccess(inputData, true)}
                    presentationMode={'auto'}
                    disabled={!canSubmit}
                />
                <VenmoOneTimePaymentButton
                    createOrder={() => createOrder(cart)}
                    onApprove={(inputData: OnApproveDataOneTimePayments) => onApproveAndRerouteOnSuccess(inputData, true)}
                    presentationMode={'auto'}
                    disabled={!canSubmit}
                />
            </PayPalProvider> */}

            <RegisterWithCashAndCheck
                submittedInfo={submittedInfo}
                approvedWithoutPaying={approvedWithoutPaying}
            />
        </div>
    )
}