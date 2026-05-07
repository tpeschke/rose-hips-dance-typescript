import { ClassInfoInterface } from "../../../utilities/classInfo";
import { ClassInterface } from "../page";

export default function getClassSelectOptions(
    classInfo: { inPerson: ClassInfoInterface[], online: ClassInfoInterface[] },
    classes: ClassInterface[]
) {

    function cleanReformatFilter(currentArray: ClassInterface[], { title, cost }: ClassInfoInterface) {
        if (typeof cost === 'number') {
            currentArray.push({
                title,
                cost
            })
        } else {
            cost.forEach(({ cost, number }) => {
                currentArray.push({
                    title: `${number}-Class-Pass ${title}`,
                    cost
                })
            })
        }

        return currentArray
    }

    return [
        ...classInfo.inPerson.reduce(cleanReformatFilter, []),
        ...classInfo.online.reduce(cleanReformatFilter, []),
    ].filter((classOption) => {
        return classes.findIndex(option => {
            return option.title === classOption.title && option.cost === classOption.cost
        }) === -1;
    })
}