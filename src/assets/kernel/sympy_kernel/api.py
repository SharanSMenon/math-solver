from sympy import *
import enum

from .series import series_expansion
from .latex import eval_latex_input, parse_expression, toLatex
from .calculus import *
from .gamma import integral, derivative
# from .ode import ode_solve

# creating enumerations using class


class ExpressionType(enum.Enum):
    derivative = 1
    integral = 2
    equation = 3
    expression = 4
    none = 5


calculus = (Derivative, Integral)
eqn = Eq


def classify(expr) -> ExpressionType:
    if isinstance(expr, eqn):
        return ExpressionType.equation
    if isinstance(expr, Derivative):
        return ExpressionType.derivative
    if isinstance(expr, Integral):
        return ExpressionType.integral
    if isinstance(expr, Expr):
        return ExpressionType.expression
    return ExpressionType.none


def solve_type(expr):
    eqn_type = classify(expr)
    if eqn_type == ExpressionType.derivative \
            or eqn_type == ExpressionType.integral:
        return {
            "type": "latex",
            "etype": "derivative" if eqn_type == ExpressionType.derivative else "integral",
            "ans": toLatex(expr.doit().simplify())
        }
    elif eqn_type == ExpressionType.equation:
        solutions = solveset(expr)
        return {
            "type": "latex",
            "etype": "equation",
            "ans": latex(solutions)
        }
    elif eqn_type == ExpressionType.expression:
        return {
            "type": "latex",
            "etype": "expression",
            "ans": toLatex(expr.simplify())
        }


def getMultipleExpr(latex):
    parsed = eval_latex_input(latex)
    expr = parse_expression(parsed)
    derivative = getDerivative(expr)
    integral = getIntegral(expr)
    series_exp = series_expansion(expr)
    return {
        "derivative": toLatex(derivative),
        "integral": toLatex(integral),
        "series": toLatex(series_exp)
    }


def solveLatexExprSimple(latex):
    parsed = eval_latex_input(latex)
    expr = parse_expression(parsed)
    solved = solve_type(expr)
    return solved


def solvePythonExprSimple(r_expr):
    expr = parse_expression(r_expr)
    solved = solve_type(expr)
    return solved

def integral_steps(integralR):
    strexp = eval_latex_input(integralR)
    expr = parse_expr(strexp)
    steps = integral.print_json_steps(expr.function, expr.variables[0])
    return {
        "steps": steps
    }

def deriv_steps(derivR):
    strexp = eval_latex_input(derivR)
    expr = parse_expr(strexp)
    steps = derivative.print_json_steps(expr.expr, expr.variables[0])
    return {
        "steps": steps
    }
