import { Component, OnInit } from '@angular/core';

const data = [
  {
    "title": "Arithmetic",
    "description": `
    Solve arithmetic expressions. \n 
    Examples: \n
    $183 + 233$ \n
    $65/13$ \n
    $\sqrt(88*32)$ \n
    \n
    It can give you answers in simplified form and in decimal form.
    `
  },
  {
    "title": "Algebra",
    "description": `
    
    `
  },
  {
    "title": "Trigonometry",
    "description": `math`
  },
  {
    "title": "Calculus",
    "description": `Solve Limits, Derivatives, and Integrals. \n`
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
