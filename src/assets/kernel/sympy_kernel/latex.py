import sympy
from sympy.parsing.latex import parse_latex
from sympy.parsing.sympy_parser import parse_expr
from sympy.printing import latex
from sympy import Basic, Symbol
from sympy.printing.jscode import jscode
from sympy.parsing.sympy_parser import parse_expr
import re

_braces_pattern = re.compile(r'(\w+)_\{(\d+)}')

def eval_latex_input(raw_input: str):
    sp_obj: Basic = parse_latex(raw_input)  # type: ignore
    sp_obj = sp_obj.replace(lambda x: x.is_Symbol, lambda x: Symbol(_braces_pattern.sub(R'\1_\2', x.name)))
    return str(sp_obj)

def parse_expression(expr):
    return parse_expr(expr)

def toLatex(expr):
    """Takes an expression and converts it to latex.

    :param expr: SympyExpression
    :return: latex string
    :rtype: str
    """
    return latex(expr)

def latexToJs(raw_input: str):
    lx = eval_latex_input(raw_input=raw_input)
    expr = parse_expr(lx)
    code = jscode(expr)
    code = code.replace("Math.", "")
    return {
        "res": "success",
        "code": code
    }
