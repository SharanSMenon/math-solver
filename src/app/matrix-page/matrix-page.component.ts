import { Component, OnInit } from '@angular/core';
import { PyodideService } from '../pyodide.service';

@Component({
  selector: 'app-matrix-page',
  templateUrl: './matrix-page.component.html',
  styleUrls: ['./matrix-page.component.scss']
})
export class MatrixPageComponent implements OnInit {

  constructor(private pyodideService: PyodideService) { }

  ngOnInit(): void {
    this.pyodideService.loadPyo()
  }

}
