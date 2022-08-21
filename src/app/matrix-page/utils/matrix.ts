export function initMatrix(matrixSize: number): number[][] {
    let matrix: number[][] = []
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)
        }
    }
    return matrix
}

export function changeSize(matrixSize: number, originalMat: number[][]): number[][] {
    let mat: number[][] = []
    for (let i = 0; i < matrixSize; i++) {
        mat.push([])
        for (let j = 0; j < matrixSize; j++) {
            if (originalMat[i]) {
                if (originalMat[i][j]) {
                    mat[i].push(originalMat[i][j])
                } else {
                    mat[i].push(0)
                }
            } else {
                mat[i].push(0)
            }
        }
    }
    return mat;
}