# Solver

The core of this program is the solver. The solver is powered by SymPy running in a Pyodide instance. Pyodide is python runtime powered by WebAssembly.

The rich math input is powered by MathLive. MathLive gives $\LaTeX$ output. SymPy then parses the latex and converts it into an expression, which can be solved.

## Arithmetic

The solver supports solving most arithmetic problems. Steps are not supported for arithmetic yet.

## Algebra and Trigonometry

The solver can solve most algebra and trig problems. Steps are not supported yet.

The solver is capable of solving algebraic equation and simplifying algebraic expressions.

## Calculus

The solver can solve most calculus problems and output steps for some problems too. The following list shows the capabilities of the calculus solver.

- Limits
- Infinite Limits
- Derivatives (steps)
    - Higher order derivatives (no steps)
- Integrals (steps)
    - Improper Integrals
    - Definite Integrals
    - Double Integrals
    - Triple Integrals

## Future plans

The following sections detail future features of the solver.

## Linear Algebra

Matrix calculator coming soon

## Differential Equations

ODE solver coming soon. A simple ODE solver can be implemented if Sympy input is accepted.

## Sympy input
