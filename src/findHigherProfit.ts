export const findHigherProfit = (listPriceActions: number[]): number => {

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


/* 
    Para testar exclusivamente este método

    Rodar script : yarn dev:challange-find-higher-profit 

    Descomentar a linha abaixo
*/

// console.log(findHigherProfit([7, 1, 5, 3, 6, 4]))