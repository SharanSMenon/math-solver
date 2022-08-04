import { Component, OnInit } from '@angular/core';
import { PyodideService } from './pyodide.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private pyodideService: PyodideService
  ) {}

  ngOnInit() {
    this.pyodideService.loadPyo();
  }

  get isLoading() {
    return this.pyodideService.isLoading
  }


}
