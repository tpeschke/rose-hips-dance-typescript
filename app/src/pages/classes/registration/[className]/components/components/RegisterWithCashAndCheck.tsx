import { useState } from "react";

interface Props {
    disabled: boolean,
    approvedWithoutPaying: (hasPaid: boolean) => void
}

export default function RegisterWithCashAndCheck({ disabled, approvedWithoutPaying }: Props) {
    const [showWarning, setShowWarning] = useState(false)

    if (!showWarning) {
        return <button
            className='gold'
            onClick={_ => setShowWarning(true)}
            disabled={disabled}
        >
            {/* Register with Cash or Check */}
            Register
        </button>
    }

    return (
        <>
            <p className="warning">Payment is due at the first class. If you're paying with Cash, you must bring the exact amount.</p>
            <button
                className='gold'
                onClick={_ => approvedWithoutPaying(false)}
            >
                I Understand
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