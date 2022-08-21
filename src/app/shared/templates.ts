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

export const matrixGaussJordanTemplate = `
    import numpy as np
    from sympy import Matrix
    from sympy_kernel.matrix import solve_system_gauss_jordan
    A = Matrix(np.array(matrix).reshape((shape, shape)))
    B = Matrix(np.array(outs))
    out = solve_system_gauss_jordan(A, B)
    `

export const matrixLUSolveTemplate = `
    import numpy as np
    from sympy import Matrix
    from sympy_kernel.matrix import solve_system_lu
    A = Matrix(np.array(matrix).reshape((shape, shape)))
    B = Matrix(np.array(outs))
    out = solve_system_lu(A, B)
    `

export const matrixLUDecompTemplate = `
    import numpy as np
    from sympy import Matrix
    from sympy_kernel.matrix import lu_decomposition
    A = Matrix(np.array(matrix).reshape((shape, shape)))
    out = lu_decomposition(A)
    `

export const matrixEigenvaluesTemplate = `
    import numpy as np
    from sympy import Matrix
    from sympy_kernel.matrix import eigenthings
    A = Matrix(np.array(matrix).reshape((shape, shape)))
    out = eigenthings(A)
    `
export const matrixInverseTemplate = `
    import numpy as np
    from sympy import Matrix
    from sympy_kernel.matrix import inverse_matrix
    A = Matrix(np.array(matrix).reshape((shape, shape)))
    out = inverse_matrix(A)
    `

export const matrixDeterminantTemplate = `
    import numpy as np
    from sympy import Matrix
    from sympy_kernel.matrix import determinant
    A = Matrix(np.array(matrix).reshape((shape, shape)))
    out = determinant(A)
    `
export const matrixTransposeTemplate = `
    import numpy as np
    from sympy import Matrix
    from sympy_kernel.matrix import transpose_matrix
    A = Matrix(np.array(matrix).reshape((shape, shape)))
    out = transpose_matrix(A)
    `

export const matMulTemplate = `
    import numpy as np
    from sympy import Matrix
    from sympy_kernel.matrix import multiply_matrices
    A = Matrix(np.array(matrixA).reshape((matAShape, matAShape)))
    B = Matrix(np.array(matrixB).reshape((matBShape, matBShape)))
    out = multiply_matrices(A, B)
    `

export const matAddTemplate = `
    import numpy as np
    from sympy import Matrix
    from sympy_kernel.matrix import add_matrices
    A = Matrix(np.array(matrixA).reshape((matAShape, matAShape)))
    B = Matrix(np.array(matrixB).reshape((matBShape, matBShape)))
    out = add_matrices(A, B)
    `

export const matSubTemplate = `
    import numpy as np
    from sympy import Matrix
    from sympy_kernel.matrix import subtract_matrices
    A = Matrix(np.array(matrixA).reshape((matAShape, matAShape)))
    B = Matrix(np.array(matrixB).reshape((matBShape, matBShape)))
    out = subtract_matrices(A, B)
    `