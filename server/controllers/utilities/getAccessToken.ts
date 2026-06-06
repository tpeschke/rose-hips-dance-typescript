import axios from "axios"
import { CLIENT_ID, CLIENT_SECRET } from "../../server-config"
import getEnvironmentVariables from "./getEnvironmentVariables"

export default async function getAccessToken() {
    const auth = `${CLIENT_ID}:${CLIENT_SECRET}`

    const { endpointURL } = getEnvironmentVariables()

    const { data } = await axios.post(
        endpointURL + '/v1/oauth2/token',
        { grant_type: 'client_credentials' },
        {
            headers: {
                'Content-Type': 'application/x-ww-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(auth).toString('base64')}`,
            }
        }
    )

    return data.access_token
}