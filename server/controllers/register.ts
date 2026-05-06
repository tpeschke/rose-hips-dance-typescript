import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { Request, Response } from '../apiInterfaces/apiInterfaces'
import { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SPREADSHEET_ID } from '../server-config';

function getTodaysDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
}

interface RegisterRequest extends Request {
    body: {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        email: string,
        classes: string[],
        hasAgreed: boolean,
        recommendation: string,
        hasPaid: boolean,
        amount: number
    }
}

export async function registerStudentForClass(request: RegisterRequest, response: Response) {
    const { firstName, lastName, phoneNumber, email, classes, hasAgreed, recommendation, hasPaid, amount } = request.body;

    const canSubmit =
        !!firstName &&
        !!lastName &&
        !!phoneNumber &&
        !!email &&
        classes.length > 0 &&
        hasAgreed;

    if (!canSubmit) {
        return response.send({ registered: false })
    }

    const serviceAccountAuth = new JWT({
        email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: (GOOGLE_PRIVATE_KEY).split(String.raw`\n`).join('\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID, serviceAccountAuth);

    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    await sheet.addRow({
        'First Name': firstName,
        'Last Name': lastName,
        'Phone Number': phoneNumber,
        'Email': email,
        'Classes': classes.toString(),
        'Agreed to Waiver': hasAgreed,
        'Recommendation Source': recommendation,
        'Paid': hasPaid,
        'Date Paid': hasPaid ? getTodaysDate() : '',
        'Amount': amount
    })

    return response.send({ registered: true })
}