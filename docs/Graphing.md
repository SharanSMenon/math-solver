# Graphing Calculator

The solver comes with a graphing calculator. The graphing calculator accepts $\LaTeX$ input via MathLive editor. The input is then parsed into Javascript code through sympy and passed into the function-plot.js library, which processes it and outputs a plot. 

## Normal Expressions

Normal expressions only support 1 variable $x$.

**Examples**:

- $x$
- $x^2$
- $\frac{x+4}{x+2}$
- $x^3 + 4x^2 + 5x - 4$
- $\sqrt{x^2-4x}$

## Implicit Expressions

The grapher also supports implicit expressions so that functions can be graphed with both $x$ and $y$ variables. To graph the circle $x^2 + y^2 = 4$, you will need to use implicit mode. 

In implicit mode, the function should be expressed in terms of x and y, and it should be equal to zero. To graph the circle in implicit mode, you type the following expression: $x^2 + y^2 - 4$.

**Examples**:

- $x^2 + y^2 - 4$
- $\frac{\left(x-4\right)^2}{5}+\frac{\left(y-3\right)^2}{2}-5^2$

## Polar Functions

The grapher supports polar functions in the form of $r=$. Variable used here is $\theta$

**Examples**:

- $r=\theta$
- $r=\sin^2(\theta)$
- $r=\sin(\theta) + \cos(\theta)$

> Note you do not type the $r=$ in the expression editor. Just type the right side.

## **Coming soon**

The following sections details features that will be coming soon

## Parametric functions

Graph parametric functions that take both $x$ and $y$ functions.

**Examples**:
$$
\left\{
    \begin{array}{lr}
        x=\sin(t)\\
        y=\cos(t)
    \end{array}
\right\}
$$

## Color Lines

Users should be able to choose a custom color for each curve. Right now, the colors are automatically picked.

## Tangent Lines

Linear functions should be allowed to have tangent lines that update with the mouse.