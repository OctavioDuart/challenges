import { findIndices } from './findIndicesResult'
import { isValidBrackets } from './isValidBrackets'
import { findHigherProfit } from './findHigherProfit'



// Questão 1

const findIndicesResultList: number[] = [2, 7, 11, 15]
const findIndicesResultTarget: number = 19

const resultFindIndices = findIndices(findIndicesResultList, findIndicesResultTarget);

console.log(`Resultado questão 1 ==> ${resultFindIndices}`)

console.log('------------------------------------------------------------------------')

// Questão 2

const bracket: string = '{[()]}'

const resultIsValidBracket = isValidBrackets(bracket)

console.log(`Resultado questão 2 ==> ${resultIsValidBracket}`)

console.log('------------------------------------------------------------------------')

// Questão 3

const listActions: number[] = [7, 1, 5, 3, 6, 4]

const resultListActions = findHigherProfit(listActions)

console.log(`Resultado questão 3 ==> ${resultListActions}`)

console.log('------------------------------------------------------------------------')






