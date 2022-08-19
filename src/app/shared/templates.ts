export function createLatexToJSCode(latex: string): string {
    const expressionCode = `
    from sympy_kernel import latexToJs
    rst = R"${latex}"
    out = latexToJs(rst)
    `
    return expressionCode
}

export function createPythonTemplate(latex: string): string {
    const expressionCode = `
    import sympy_kernel
    rst = R"${latex}"
    out = sympy_kernel.solveLatexExprSimple(rst)
    `
    return expressionCode
}

export function createExpressionTemplate(latex: string): string {
    const expressionCode = `
    import sympy_kernel
    rst = R"${latex}"
    out = sympy_kernel.getMultipleExpr(rst)
    `
    return expressionCode
}

export function createTemplate(latex: string): string {
    const expressionCode = `
    import sympy_kernel
    rst = R"${latex}"
    out = sympy_kernel.solveLatexExprSimple(rst)
    `
    return expressionCode
}

export function createPythonExprTemplate(python: string): string {
    const expressionCode = `
    import sympy_kernel
    rst = R"${python}"
    out = sympy_kernel.solvePythonExprSimple(rst)
    `
    return expressionCode
}

export function createODETemplate(latex: string): string {
    const expressionCode = `
    import sympy_kernel
    rst = R"${latex}"
    out = sympy_kernel.ode_solve(rst)
    `
    return expressionCode
}