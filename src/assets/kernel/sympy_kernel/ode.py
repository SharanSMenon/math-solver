from sympy import *
from .latex import eval_latex_input, parse_expression, toLatex


def ode_solve(latex):
    f = Function("f")
    x = symbols("x")
    st = eval_latex_input(latex)
    st = st.replace("y**doubleprime", "diff(f(x), x, x)")
    st = st.replace("y**prime", "diff(f(x), x)")
    st = st.replace("y", "f(x)")
    expr = parse_expression(st)
    solution = dsolve(expr, f(x))
    latex = toLatex(solution)
    return {
        "type": "latex",
        "etype": "differential_equation",
        "latex": latex
    }

