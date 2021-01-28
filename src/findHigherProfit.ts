function findHigherProfit(listPriceActions: number[]): number {

    const isDecreasing: boolean = listPriceActions.every((num, index) => {
        return num <= listPriceActions[index - 1];
    });

    if (isDecreasing) {
        return 0
    }

    let higherProfit: number = 0;

    listPriceActions.forEach((priceAction, key) => {

        for (let i = key; i <= listPriceActions.length; i++) {

            const indexAccess = i === listPriceActions.length ? i : i + 1
            const nextsPriceAction = listPriceActions[indexAccess];

            if (higherProfit < nextsPriceAction - priceAction) {
                higherProfit = nextsPriceAction - priceAction
            }
        }
    })

    return higherProfit;
}

