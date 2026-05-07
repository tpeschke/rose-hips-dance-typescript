import classInfo, { ClassInfoInterface } from '../../utilities/classInfo';
import './RegisteredClassDisplay.css'

interface Props {
    nameOfClass: string
}

export default function RegisteredClassDisplay({ nameOfClass }: Props) {
    const [info]: ClassInfoInterface[] = [
        ...classInfo.inPerson,
        ...classInfo.online
    ].filter(singleClassInfo => singleClassInfo.title === nameOfClass)

    if (!info) {
        return <></>
    }

    const { title, time, location, additionalInfo } = info

    return (
        <div className="registered-class-display">
            <h3>{title}</h3>
            <p>
                <strong>
                    Time:{"\n"}
                </strong>{" "}
                {time}
            </p>
            <p>
                <strong>
                    Location:{" "}
                </strong>{" "}
                {location}
            </p>
            {additionalInfo ? (
                <p>
                    <strong>
                        Additional Info:{"\n"}
                    </strong>{" "}
                    {additionalInfo}
                </p>
            ) : (
                <></>
            )}
        </div>
    )
}