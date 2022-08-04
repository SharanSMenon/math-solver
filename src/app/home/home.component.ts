import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { PyodideService } from '../pyodide.service';
import { OutputType, OutputEType, Equation } from "../shared/enums";
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('mathOutput') mathOutput: ElementRef

  mathText: string
  outputType: OutputType = OutputType.None
  outputEType: OutputEType = OutputEType.None
  outputLatex: string;
  showSteps = false;
  stepsMap: string;
  public OutputEnum = OutputType;
  public OutputEEnum = OutputEType;

  constructor(
    private pyodideService: PyodideService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.snackbarService.loading();
    this.pyodideService.isLoadingObs.subscribe(value => {
      if (!value) {
       this.snackbarService.ready();
      }
    })
  }

  get isLoading(): boolean {
    return this.pyodideService.isLoading
  }

  reset() {
    this.showSteps = false;
    this.stepsMap = ""
  }

  mathFieldChange(event: Equation): void {
    this.reset()
    const text = event.value
    const template = this.pyodideService.createTemplate(text)
    const output: Map<string, string> = this.pyodideService.runPython(template)
    this.mathText = text;
    this.outputEType = output.get("etype") as OutputEType
    this.outputType = output.get("type") as OutputType;
    if (this.outputType == OutputType.Latex) {
      this.outputLatex = "$" + output.get("ans") as string + "$"
    }
  }

  get showStepsButton(): boolean {
    return this.outputEType == OutputEType.Integral || this.outputEType == OutputEType.Derivative
  }

  getSteps() {
    let template;
    if (this.outputEType == OutputEType.Integral) {
      template = this.pyodideService.createIntegralStepsTemplate(this.mathText)
    } else if (this.outputEType == OutputEType.Derivative) {
      template = this.pyodideService.createDerivativeStepsTemplate(this.mathText)
    }
    if (template) {
      const output: Map<string, string> = this.pyodideService.runPython(template)
      const str: string = output.get("steps")!;
      this.stepsMap = str
      this.showSteps = true;
    }
  }

}
