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

## Differential Equations

The solver can solve certain ODE's. ODE solving is generally more complex than solving the above types of equations, and can take a long time compared to other problems because of its complexity. Computer power tends to be important here, because the more powerful your computer is, the faster the WebAssembly VM can perform the computations.

Right now, the calculator can solve many first and second order differential equations. 

Enter your equation with where $y$ is the function to find and $x$ is your variable. The calculator returns the answer as a function $f(x)$.

**Examples**:
- $y^{\doubleprime} - 5y^{\prime} + 6y=0$
- $y^{\prime} = 2x$

## Sympy input

One can also enter SymPy input, if they have problems that are hard to translate into a LaTeX, or if the LaTex editor doesn't support certain types of problems (like multivariate equations). 

## Future plans

The following sections detail future features of the solver. The features below have not been implemented yet.

### Linear Algebra

The calculator will accept matrices as input. It should be able to find the determinant, solve systems of equations using matrices, find the inverse, perform elementary matrix operations, etc. Either NumPy or SymPy could be used for this.

Symbolic matrices can be supported by SymPy.

