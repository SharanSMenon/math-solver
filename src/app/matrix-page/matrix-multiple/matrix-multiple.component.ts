import { Component, OnInit } from '@angular/core';
import { PyodideService } from 'src/app/pyodide.service';
import { MatrixUpdate } from 'src/app/shared/enums';
import { matAddTemplate, matMulTemplate, matSubTemplate } from 'src/app/shared/templates';
import { initMatrix } from '../utils/matrix';

@Component({
  selector: 'app-matrix-multiple',
  templateUrl: './matrix-multiple.component.html',
  styleUrls: ['./matrix-multiple.component.scss']
})
export class MatrixMultipleComponent implements OnInit {

  matrixA: number[][] = []
  matrixB: number[][] = []
  matrixSizeA = 4
  matrixSizeB = 4

  outLatex: string = ""
  showOut: boolean = false;

  constructor(
    private pyodideService: PyodideService
  ) { }

  ngOnInit(): void {
    this.matrixA = initMatrix(this.matrixSizeA)
    this.matrixB = initMatrix(this.matrixSizeB)
  }

  onMatrixChange(event: MatrixUpdate) {
    if (event.name == "A") {
      this.matrixA = event.matrix
      this.matrixSizeA = event.size
    } else {
      this.matrixB = event.matrix
      this.matrixSizeB = event.size
    }
  }

  runMatrixMultiply() {
    this.runMatrixOp(matMulTemplate)
  }

  runMatrixAdd() {
    this.runMatrixOp(matAddTemplate)
  }

  runMatrixSub() {
    this.runMatrixOp(matSubTemplate)
  }

  runMatrixOp(template: string) {
    let context = {
      matrixA: this.matrixA,
      matrixB: this.matrixB,
      matAShape: (this.matrixSizeA, this.matrixSizeA),
      matBShape: (this.matrixSizeB, this.matrixSizeB)
    }
    let out = this.pyodideService.runMatrixPython(template, context)
    this.processOut(out)
  }

  processOut(out: Map<String, String>) {
    let latex = out.get("latex");
    this.outLatex = latex as string;
    this.showOut = true;
  }

}
