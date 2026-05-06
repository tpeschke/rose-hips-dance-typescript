import classInfo from '../../utilities/classInfo';
import './RegisteredClassDisplay.css'

interface Props {
    nameOfClass: string
}

export default function RegisteredClassDisplay({ nameOfClass }: Props) {
    const [info]: {
        title: string;
        image?: string;
        skillLevel: string;
        body: string[];
        prereqs: never[];
        time: string;
        address?: string;
        cost: number;
    }[] = [
        ...classInfo.inPerson,
        ...classInfo.online
    ].filter(singleClassInfo => singleClassInfo.title === nameOfClass)

    if (!info) {
        return <></>
    }

    const { title, time, address } = info

    return (
        <div className="registered-class-display">
            <h3>{title}</h3>
            <p>
                <strong>
                    Time:{"\n"}
                </strong>{" "}
                {time}
            </p>
            {address ? (
                <p>
                    <strong>
                        Location:{" "}
                    </strong>{" "}
                    {address}
                </p>
            ) : (
                <p>
                    <strong>
                        Location:{"\n"}
                    </strong>{" "}
                    Online
                </p>
            )}
        </div>
    )
}