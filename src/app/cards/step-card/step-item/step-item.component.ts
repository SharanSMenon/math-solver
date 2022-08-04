import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-item',
  templateUrl: './step-item.component.html',
  styleUrls: ['./step-item.component.scss']
})
export class StepItemComponent implements OnInit {

  @Input("step-item") stepItem: string
  stepsMap: any
  stepType: string
  pText: string

  constructor() { }

  ngOnInit(): void {
    const parsed = JSON.parse(this.stepItem)
    this.stepsMap = parsed
    if (this.stepsMap.level) {
      this.stepType = "level"
    } else if(this.stepsMap.step) {
      this.stepType = "step"
    } else if (this.stepsMap.p) {
      this.stepType = "p"
      this.processP();
    } else if (this.stepsMap.collapsible) {
      this.stepType = "collapsible"
    } else if (this.stepsMap.text) {
      this.stepType = "text"
    } else if (this.stepsMap.inline) {
      this.stepType = "inline"
    } else if (this.stepsMap.block) {
      this.stepType = "block"
    } else if (this.stepsMap.header) {
      this.stepType = "header"
    }
  }

  processP() {
    const p = this.stepsMap.p;
    let out = ""
    p.forEach((block: any) => {
      if (block.text) {
        out += block.text
      } else if (block.inline) {
        out += "$" + block.inline + "$"
      } else if (block.block) {
        out += "$$" + block.block + "$$"
      }
    });
    this.pText = out;
  }

  stringify(item: any): string {
    return JSON.stringify(item);
  }

}
