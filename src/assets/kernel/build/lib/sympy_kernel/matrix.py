from sympy import *

from sympy_kernel.latex import toLatex
from sympy.matrices.common import NonInvertibleMatrixError, NonPositiveDefiniteMatrixError


def _solve_system_gauss_jordan(A: Matrix, B: Matrix):
    try:
        sol, params = A.gauss_jordan_solve(B)
    except ValueError as e:
        return r"$$\text{No solutions found}$$", "error"
    else:
        n_solutions = len(sol)
        output = r"$$\begin{cases}"
        for s in range(n_solutions):
            ans = sol[s]
            output += Rf"x_{s} = {ans} \\"
        output += r"\end{cases}$$"
        status = "success"
        return output, status


def solve_system_gauss_jordan(A: Matrix, B: Matrix):
    solution_latex, status = _solve_system_gauss_jordan(A, B)
    output = {
        "latex": solution_latex,
        "status": status,
        "method": "Gauss-Jordan",
        "type": "system_of_equation"
    }
    return output


def _solve_system_lu(A: Matrix, B: Matrix):
    try:
        sol = A.LUsolve(B)
    except ValueError as e:
        return r"$$\text{No solutions found}$$", "error"
    else:
        n_solutions = len(sol)
        output = r"$$\begin{cases}"
        for s in range(n_solutions):
            ans = sol[s]
            output += Rf"x_{s} = {ans} \\"
        output += r"\end{cases}$$"
        status = "success"
        return output, status


def solve_system_lu(A: Matrix, B: Matrix):
    solution_latex, status = _solve_system_lu(A, B)
    output = {
        "latex": solution_latex,
        "status": status,
        "method": "LU Decomposition",
        "type": "system_of_equation"
    }
    return output


def eigenthings(A: Matrix):
    try:
        eigens = A.eigenvects()  # eigenvectors
    except NonSquareMatrixError as e:
        return {
            "type": "latex",
            "status": "error",
            "latex": r"$$\text{Matrix must be square.}$$"
        }
    else:
        n = len(eigens)  # number of eigenvectors
        outlatex = r"\begin{cases}"
        for i in range(n):
            eigenvalue, count, eigenvector = eigens[i]
            vec_latex = toLatex(eigenvector[0])
            outlatex += rf"\lambda_{i} = {eigenvalue} & v_{i} = {vec_latex} \\"
        outlatex += r"\end{cases}"
        return {
            "type": "latex",
            "status": "success",
            "latex": rf"$${outlatex}$$"
        }


def inverse_matrix(A: Matrix):
    try:
        print(A)
        inverse = A.inv()
        ltx = toLatex(inverse)
        return {
            "type": "latex",
            "status": "success",
            "latex": rf"$${ltx}$$"
        }
    except NonInvertibleMatrixError as e:
        return {
            "type": "latex",
            "status": "error",
            "latex": r"$$\text{Matrix is not invertible. det == 0}$$"
        }
    except NonSquareMatrixError as e:
        return {
            "type": "latex",
            "status": "error",
            "latex": r"$$\text{Matrix must be square.}$$"
        }

def lu_decomposition(A: Matrix):
    try:
        L, U, p = A.LUdecomposition()
    except Exception as e:
        print(e)
        return {
            "type": "latex",
            "status": "error",
            "latex": r"$$\text{Unable to find LU Decomposition}$$"
        }
    else:
        L = toLatex(L)
        U = toLatex(U)

        ret = r"L = " + L + r"\\ U = " + U + r""
        return {
            "type": "latex",
            "status": "success",
            "latex": rf"$${ret}$$"
        }


def determinant(A: Matrix):
    try:
        det = A.det()
        ltx = toLatex(det)
        return {
            "type": "latex",
            "status": "success",
            "latex": rf"$${ltx}$$"
        }
    except NonSquareMatrixError as e:
        return {
            "type": "latex",
            "status": "error",
            "latex": r"$$\text{Matrix must be square.}$$"
        }


def transpose_matrix(A: Matrix):
    try:
        print(A)
        trans = A.T
        ltx = toLatex(trans)
        return {
            "type": "latex",
            "status": "success",
            "latex": rf"$${ltx}$$"
        }
    except NonSquareMatrixError as e:
        return {
            "type": "latex",
            "status": "error",
            "latex": r"$$\text{Matrix must be square.}$$"
        }


def multiply_matrices(A: Matrix, B: Matrix):
    try:
        res = A * B
        ltx = toLatex(res)
        return {
            "type": "latex",
            "status": "success",
            "latex": rf"$${ltx}$$"
        }
    except ShapeError as e:
        err = f"Size mismatch {A.shape} * {B.shape}"
        return {
            "type": "latex",
            "status": "error",
            "latex": r"$$\text{ " + err + r" }$$"
        }


def add_matrices(A: Matrix, B: Matrix):
    try:
        res = A + B
        ltx = toLatex(res)
        return {
            "type": "latex",
            "status": "success",
            "latex": rf"$${ltx}$$"
        }
    except ShapeError as e:
        err = f"Size mismatch {A.shape} * {B.shape}"
        return {
            "type": "latex",
            "status": "error",
            "latex": r"$$\text{ " + err + r" }$$"
        }


def subtract_matrices(A: Matrix, B: Matrix):
    try:
        res = A - B
        ltx = toLatex(res)
        return {
            "type": "latex",
            "status": "success",
            "latex": rf"$${ltx}$$"
        }
    except ShapeError as e:
        err = f"Size mismatch {A.shape} * {B.shape}"
        return {
            "type": "latex",
            "status": "error",
            "latex": r"$$\text{ " + err + r" }$$"
        }
