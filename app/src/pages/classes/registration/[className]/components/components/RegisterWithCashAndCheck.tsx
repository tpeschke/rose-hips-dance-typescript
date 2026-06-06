import { useState } from "react";

interface Props {
    submittedInfo: {
        firstName: boolean,
        lastName: boolean,
        phoneNumber: boolean,
        validPhoneNumber: boolean,
        email: boolean,
        validEmail: boolean,
        classes: boolean,
        hasAgreed: boolean
    }
    approvedWithoutPaying: (hasPaid: boolean) => void
}

export default function RegisterWithCashAndCheck({ submittedInfo, approvedWithoutPaying }: Props) {
    const [showMissingInfo, setShowMissingInfo] = useState(false)

    const [showWarning, setShowWarning] = useState(false)

    const { firstName, lastName, phoneNumber, validPhoneNumber, email, validEmail, classes, hasAgreed } = submittedInfo

    const canSubmit = firstName && lastName && phoneNumber && validPhoneNumber && email && validEmail && classes && hasAgreed

    if (!showWarning) {
        return (
            <>
                {showMissingInfo && (
                    <>
                        {!firstName && <p className="warning">You haven't added your First Name. Please add it in the "Name" section above.</p >}
                        {!lastName && <p className="warning">You haven't added your Last Name. Please add it in the "Name" section above.</p >}
                        {!phoneNumber && <p className="warning">You haven't added your Phone Number. Please add it in the "Phone Number" section above.</p >}
                        {!validPhoneNumber && <p className="warning">Your Phone Number is invalid. Please update it in the "Phone Number" section above.</p >}
                        {!email && <p className="warning">You haven't added your Email. Please add it in the "Email" section above.</p >}
                        {!validEmail && <p className="warning">Your Email is invalid. Please update it in the "Email" section above.</p >}
                        {!classes && <p className="warning">You're missing classes. Please add at least one class in the "Check Out" section above.</p >}
                        {!hasAgreed && <p className="warning">You haven't agreed to the liability wavier. Please mark "I Agree" in the section above.</p >}
                    </>
                )
                }
                <button
                    className='gold'
                    onClick={_ => canSubmit ? setShowWarning(true) : setShowMissingInfo(true)}
                >
                    Register with Cash or Check
                </button>
            </>
        )
    }

    return (
        <>
            <p className="orange">Payment is due at the first class. If you're paying with Cash, you must bring the exact amount.</p>
            <button
                className='gold'
                onClick={_ => approvedWithoutPaying(false)}
            >
                I Have
                (Complete Registration)
            </button>
            <button
                className='transparent'
                onClick={_ => setShowWarning(false)}
            >
                Never Mind Then
            </button>
        </>
    )
}