import { Component, OnInit } from '@angular/core';
import { PyodideService } from '../pyodide.service';
import { Equation, LatexCard, OutputEType, OutputType } from '../shared/enums';
import { createODETemplate } from '../shared/templates';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-ode-page',
  templateUrl: './ode-page.component.html',
  styleUrls: ['./ode-page.component.scss']
})
export class OdePageComponent implements OnInit {

  mathText: string
  outputType: OutputType = OutputType.None
  outputEType: OutputEType = OutputEType.None
  latexCards: LatexCard[] = []

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

  reset() {
    this.mathText = ""
    this.latexCards = []
  }

  mathFieldChange(event: Equation): void {
    this.reset();
    const text = event.value;
    console.log(text)
    this.mathText = text;
    const template = createODETemplate(text);
    const output = this.pyodideService.runPython(template)
    this.outputType = output.get("type") as OutputType;
    if (this.outputType == OutputType.Latex) {
      this.latexCards.push({
        name: "Differential Equation",
        latex: "$$" + output.get("latex") as string + "$$"
      })
    }
  }

  get isLoading(): boolean {
    return this.pyodideService.isLoading
  }

}
