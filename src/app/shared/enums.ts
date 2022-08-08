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
  id: string
  value: string
}

export interface EquationX { // Contains Additional Options
  id: string
  value: string
  latex: string
  fnType?: 'linear' | 'parametric' | 'implicit' | 'polar'
}

export const fnTypes: string[] = [
  'linear', 'parametric',
  'implicit', 'polar'
]