import sympy_kernel
from sympy_kernel import solveLatexExprSimple, integral_steps, latexToJs
from sympy_kernel.api import deriv_steps
from sympy_kernel.latex import eval_latex_input, toLatex
from sympy.parsing.sympy_parser import parse_expr
from pprint import pprint
import json

def test_latex():
    rst = R"445+232"
    out = solveLatexExprSimple(rst)
    print(out)

def cleanUpSteps(steps):
    stepsArray = steps["content"]["level"]


def test_integra():
    integral = r"\int x"
    out = integral_steps(integral)
    print(out)

def test_derivative():
    deriv = r"\frac{d}{dx}\left(x^2\right)"
    out = deriv_steps(deriv)
    print(out)

def test_latexToJS():
    print(latexToJs(r"\sin\left(x^{2}\right)+3x^{3}+4x"))

test_latexToJS()