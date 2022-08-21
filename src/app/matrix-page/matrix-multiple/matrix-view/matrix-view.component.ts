import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatrixUpdate } from 'src/app/shared/enums';
import { changeSize } from '../../utils/matrix';

@Component({
  selector: 'app-matrix-view',
  templateUrl: './matrix-view.component.html',
  styleUrls: ['./matrix-view.component.scss']
})
export class MatrixViewComponent implements OnInit {

  @Input('matrix') matrix: number[][]
  @Input('matrixSize') matrixSize: number;
  @Input('matrixName') name: string;

  @Output() onMatUpdate = new EventEmitter<MatrixUpdate>();

  constructor() { }

  ngOnInit(): void {
  }

  updateSize(factor: number) {
    if (this.matrixSize + factor >= 2) {
      this.matrixSize += factor;
    }
    this.matrix = changeSize(this.matrixSize, this.matrix)
    this.onMatUpdate.emit({
      matrix: this.matrix,
      size: this.matrixSize,
      name: this.name
    })
  }

  assign(x: number, y: number, event: any): void {
    this.matrix[x][y] = parseInt(event.target.value)
    this.onMatUpdate.emit({
      matrix: this.matrix,
      size: this.matrixSize,
      name: this.name
    })
  }

  array(size: number) {
    return Array(size).fill(0)
  }

}
