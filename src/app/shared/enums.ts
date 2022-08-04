export enum OutputType {
  None = "none",
  Latex = "latex",
  MultipleAnswers = "multiple_solutions"
}

export enum OutputEType {
  Derivative = "derivative",
  Integral = "integral",
  Expression = "expression",
  Equation = "equation",
  None = "none"
}

export interface Equation {
  id: string,
  value: string
}

export interface EquationX {
  id: string,
  value: string
  latex: string
}