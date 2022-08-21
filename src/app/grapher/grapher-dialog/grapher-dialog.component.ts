import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EquationX, fnTypes } from 'src/app/shared/enums';


@Component({
  selector: 'app-grapher-dialog',
  templateUrl: './grapher-dialog.component.html',
  styleUrls: ['./grapher-dialog.component.scss']
})
export class GrapherDialogComponent implements OnInit {

  fnTypes = fnTypes

  constructor(
    public dialogRef: MatDialogRef<GrapherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EquationX,
  ) { 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
