function isValidBrackets(bracket: string): string {

    const stack = []
    for (let i = 0; i < bracket.length; i++) {

        let currentChar = bracket[i];

        switch (currentChar) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}')
                break;
            default:
                const topElement = stack.pop()
                if (currentChar !== topElement) {
                    return 'NÃO'
                };
        }
    }
    return !!stack.length ?  "NÃO" : "SIM";
}


