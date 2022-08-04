export function createLatexToJSCode(latex: string): string {
    const expressionCode = `
    from sympy_kernel import latexToJs
    rst = R"${latex}"
    out = latexToJs(rst)
    `
    return expressionCode
}