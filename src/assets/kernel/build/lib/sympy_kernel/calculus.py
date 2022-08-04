from sympy import *
x = symbols("x")

def getDerivative(expr):
    return diff(expr, x)

def getIntegral(expr):
    return integrate(expr, x)