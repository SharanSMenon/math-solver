import { Component, OnInit } from '@angular/core';
import { PyodideService } from 'src/app/pyodide.service';
import { matrixGaussJordanTemplate, matrixLUSolveTemplate } from 'src/app/shared/templates';

@Component({
  selector: 'app-system-equation',
  templateUrl: './system-equation.component.html',
  styleUrls: ['./system-equation.component.scss']
})
export class SystemEquationComponent implements OnInit {

  matrix: number[][] = []
  outs: number[] = []
  matrixSize = 4;

  outLatex: string = ""
  name = "Solution"
  showOut: boolean = false;

  constructor(
    private pyodideService: PyodideService
  ) { }

  ngOnInit(): void {
    this.initMatrix();
    this.outs = Array(this.matrixSize).fill(0)
  }

  updateSize(factor: number) {
    if (this.matrixSize + factor >= 2) {
      this.matrixSize += factor;
    }
    this.changeSize();
  }

  initMatrix() {
    for (let i = 0; i < this.matrixSize; i++) {
      this.matrix.push([])
      for (let j = 0; j < this.matrixSize; j++) {
        this.matrix[i].push(0)
      }
    }
  }

  changeSize() {
    let mat: number[][] = []
    let out: number[] = Array(this.matrixSize).fill(0)
    for (let i = 0; i < this.matrixSize; i++) {
      if (this.outs[i]) {
        out[i] = this.outs[i];
      } else {
        out[i] = 0;
      }
      mat.push([])
      for (let j = 0; j < this.matrixSize; j++) {
        if (this.matrix[i]) {
          if (this.matrix[i][j]) {
            mat[i].push(this.matrix[i][j])
          } else {
            mat[i].push(0)
          }
        } else {
          mat[i].push(0)
        }
      }
    }
    this.matrix = mat;
    this.outs = out;
  }

  assign(x: number, y: number, event: any): void {
    this.matrix[x][y] = parseInt(event.target.value)
  }

  assignOut(x: number, event: any) {
    this.outs[x] = parseInt(event.target.value)
  }

  array(size: number) {
    return Array(size).fill(0)
  }

  symbol(index: number): string {
    if (index == this.matrixSize - 1) {
      return `$x_${index}$ = `;
    }
    if (index == this.matrixSize) {
      return ""
    }
    return `$x_${index}$ + `;
  }

  runGauss() {
    this.name = "Solution with Gauss-Jordan Elimination"
    this.runMatrix(matrixGaussJordanTemplate)
  }

  runLU() {
    this.name = "Solution with LU Decomposition"
    this.runMatrix(matrixLUSolveTemplate)
  }

  runMatrix(template: string) {
    const context = {
      matrix: this.matrix,
      outs: this.outs,
      shape: this.matrixSize
    }
    let out = this.pyodideService.runMatrixPython(template, context)
    this.processOut(out)
  }

  processOut(out: Map<String, String>) {
    let latex = out.get("latex");
    this.outLatex = latex as string;
    this.showOut = true;
    if (out.get("status") as string == "error") {
      this.name = "Error"
    }
  }

}
