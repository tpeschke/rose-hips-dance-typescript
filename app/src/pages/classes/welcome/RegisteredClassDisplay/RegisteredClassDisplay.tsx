import classInfo, { ClassInfoInterface } from '../../utilities/classInfo';
import './RegisteredClassDisplay.css'

interface Props {
    nameOfClass: string
}

export default function RegisteredClassDisplay({ nameOfClass }: Props) {
    const cleanedClassName = nameOfClass.replace(/(\d+)-Class-Pass\s/gm, "")

    const [info]: ClassInfoInterface[] = [
        ...classInfo.inPerson,
        ...classInfo.online
    ].filter(singleClassInfo => singleClassInfo.title === cleanedClassName)

    if (!info) {
        return <></>
    }

    const { title, time, location, additionalInfo } = info

    const addLineBreakToLocation = location.substring(0, 1) !== "\n"

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
                    Location:{addLineBreakToLocation ? '\n' : ''}
                </strong>{" "}
                {location}
            </p>
            {additionalInfo && (
                <p>
                    <strong>
                        Additional Info:{"\n"}
                    </strong>{" "}
                    {additionalInfo}
                </p>
            )}
        </div>
    )
}