import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import functionPlot from 'function-plot';
import { PyodideService } from '../pyodide.service';
import { v4 as uuid4 } from 'uuid';
import { Equation, EquationX } from '../shared/enums';
import { createLatexToJSCode } from '../shared/templates';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-grapher',
  templateUrl: './grapher.component.html',
  styleUrls: ['./grapher.component.scss']
})
export class GrapherComponent implements OnInit {
  isLoading = true;
  @ViewChild('graphContainer', { read: ElementRef }) graphC: ElementRef;
  items: EquationX[] = [{
    "id": uuid4(),
    "value": "x",
    "latex": "x"

  }]

  constructor(
    private pyodideService: PyodideService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.snackbarService.loading()
  }

  ngAfterViewInit() {
    this.pyodideService.isLoadingObs.subscribe(value => {
      if (!value) {
        this.isLoading = false;
        this.createPlot()
        this.snackbarService.ready()

      } else {
        this.isLoading = true;
      }
    })
  }

  createPlot() {
    const height = this.graphC.nativeElement.offsetHeight
    const width = this.graphC.nativeElement.offsetWidth
    let data = this.items.map(item => {
      return {
        'fn': item.value
      }
    })
    functionPlot({
      target: '#graph',
      width: width - 50,
      height: height - 50,
      grid: true,
      xAxis: {
        label: 'x - axis',
        domain: [-6, 6],
      },
      yAxis: {
        label: 'y - axis',
      },
      data
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.createPlot();
  }

  getInput(id: string): EquationX {
    return this.items.find(obj => obj.id === id)!;
  }
  setInput(id: string, value: string, latex: string): void {
    this.items = this.items.map(obj => obj.id === id ? { ...obj, value, latex } : obj)
  }

  addInput() {
    this.items.push({
      id: uuid4(),
      value: "",
      latex: ""
    })
  }

  onFieldChange(event: Equation) {
    let template = createLatexToJSCode(event.value)
    let output = this.pyodideService.runPython(template);
    let result: string = output.get("res") as string;
    if (result == "success") {
      let code: string = output.get("code") as string;
      this.setInput(event.id, code, event.value)
      this.createPlot();
    }
  }

}
