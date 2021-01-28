function findIndices(list: number[], target: number): number[] | string {

    const everynumbersIsBigger: boolean = list.every(num => num > target)

    if (everynumbersIsBigger) {
        return 'Impossible to perform calculation'
    }

    const indices = []

    for (let indexCurrentNumber = 0; indexCurrentNumber <= list.length; indexCurrentNumber++) {
        const currentNumber = list[indexCurrentNumber]

        const indexNumberSum = list.findIndex((number, key) => {
            const isCurrentValue: boolean = indexCurrentNumber === key;

            if (!isCurrentValue) {
                return currentNumber + number === target
            }
        })

        const notFoundNumberSum: boolean = indexNumberSum !== -1

        if (notFoundNumberSum) {
            indices.push(indexCurrentNumber, indexNumberSum)
            return indices
        } else if (indexCurrentNumber === list.length) {
            return 'Impossible to perform calculation'
        }
    }
}

