import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { PyodideService } from '../pyodide.service';
import { OutputType, OutputEType, Equation, LatexCard } from "../shared/enums";
import { createExpressionTemplate, createPythonExprTemplate, createTemplate } from '../shared/templates';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('mathOutput') mathOutput: ElementRef

  mathText: string
  pythonText: string
  outputType: OutputType = OutputType.None
  outputEType: OutputEType = OutputEType.None
  latexCards: LatexCard[] = []
  showSteps = false;
  stepsMap: string;
  inputType: "latex" | "python" = "latex";
  public OutputEnum = OutputType;
  public OutputEEnum = OutputEType;

  constructor(
    private pyodideService: PyodideService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.pyodideService.loadPyo();
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
    this.latexCards = [];
  }

  mathFieldChange(event: Equation): void {
    this.reset();
    const text = event.value;
    this.mathText = text;
    let template = createTemplate(text);
    this.runCode(template);
  }

  onButtonClick() {
    this.reset()
    let template = createPythonExprTemplate(this.pythonText);
    this.runCode(template);
  }

  runCode(template: string) {
    const output: Map<string, string> = this.pyodideService.runPython(template);
    this.outputEType = output.get("etype") as OutputEType
    this.outputType = output.get("type") as OutputType;
    if (this.outputType == OutputType.Latex) {
      this.latexCards.push({
        name: this.outputEType,
        latex: "$$" + output.get("ans") as string + "$$"
      })
    }
    if (this.outputEType == OutputEType.Expression && this.inputType == "latex") {
      const otherAnswersCode = createExpressionTemplate(this.mathText)
      this.runOtherAnswers(otherAnswersCode)
    }
  }

  runOtherAnswers(code: string) {
    const output = this.pyodideService.runPython(code)
    this.latexCards = [
      ...this.latexCards,
      {
        name: "Derivative",
        latex: "$$" + output.get("derivative") as string + "$$"
      },
      {
        name: "Integral",
        latex: "$$" + output.get("integral") as string + "$$"
      },
      {
        name: "Series Expansion",
        latex: "$$" + output.get("series") as string + "$$"
      }
    ]
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
