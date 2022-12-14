import { Component, OnInit } from '@angular/core';

const data = [
  {
    "title": "Arithmetic",
    "description": `
    Solve arithmetic expressions. \n 
    Examples: \n
    $183 + 233$,  \n
    $\\frac{65}{13}$,  \n
    $\\sqrt{88*32}$,  \n
    \n
    It can give you answers in simplified form and in decimal form.
    `
  },
  {
    "title": "Algebra",
    "description": `
    The solver can solve algebraic equations like $x^2 = 4$. 
    It will also simplify expressions like $\\frac{x^2-4}{x+2}$. Steps are coming soon.
    `
  },
  {
    "title": "Trigonometry",
    "description": `It can simplify trig expression, take trig derivatives, plot trig functions. It will also show the series expansion if you enter a trigonometric expression.`
  },
  {
    "title": "Calculus",
    "description": `It will solve Limits, Derivatives, and Integrals. The calculator is able to give steps for derivatives and integrals.
    Definite, Improper, and Indefinite integrals are supported. Double and Triple integrals are also supported.`
  },
  {
    "title": "Differential Equations",
    "description": `It can solve many first and second order differential equations, where y is the function and x is a variable. Derivatives of y(x) are marked as y' or y''`
  },
  {
    "title": "Linear Algebra",
    "description": `The solver includes a matrix calculator that can perform many common linear algebra operations. It is capable of finding the inverse, solving linear systems, finding eigenvectors, and more.`
  }
]

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  get items() {
    return data
  }

}
