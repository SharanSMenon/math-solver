import { Component, OnInit } from '@angular/core';
import { PyodideService } from 'src/app/pyodide.service';
import {
  matrixDeterminantTemplate,
  matrixEigenvaluesTemplate,
  matrixInverseTemplate,
  matrixLUDecompTemplate,
  matrixTransposeTemplate
} from 'src/app/shared/templates';
import {
  changeSize,
  initMatrix
} from '../utils/matrix';

@Component({
  selector: 'app-single-matrix',
  templateUrl: './single-matrix.component.html',
  styleUrls: ['./single-matrix.component.scss']
})
export class SingleMatrixComponent implements OnInit {

  matrix: number[][] = []
  matrixSize = 4;

  outLatex: string = ""
  showOut: boolean = false;
  name = "Solution"

  constructor(
    private pyodideService: PyodideService
  ) { }

  ngOnInit(): void {
    this.matrix = initMatrix(this.matrixSize)
  }

  updateSize(factor: number) {
    if (this.matrixSize + factor >= 2) {
      this.matrixSize += factor;
    }
    this.matrix = changeSize(this.matrixSize, this.matrix)
  }

  assign(x: number, y: number, event: any): void {
    this.matrix[x][y] = parseInt(event.target.value)
  }

  array(size: number) {
    return Array(size).fill(0)
  }

  runEigenvalues() {
    this.name = "Eigenvalues and Eigenvectors"
    this.runCode(matrixEigenvaluesTemplate)
  }

  runLUDecomp() {
    this.name = "LU Decomposition"
    this.runCode(matrixLUDecompTemplate)
  }

  runInverse() {
    this.name = "Matrix Inverse"
    this.runCode(matrixInverseTemplate)
  }

  runRank() {
    this.name = "Matrix Rank"
    this.runCode(matrixInverseTemplate)
  }

  runDeterminant() {
    this.name = "Determinant"
    this.runCode(matrixDeterminantTemplate)
  }

  runTranspose() {
    this.name = "Matrix Transpose"
    this.runCode(matrixTransposeTemplate)
  }

  runCode(template: string) {
    const context = {
      matrix: this.matrix,
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
      this.name = "error"
    }
  }

}
