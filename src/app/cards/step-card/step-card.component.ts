import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-card',
  templateUrl: './step-card.component.html',
  styleUrls: ['./step-card.component.scss']
})
export class StepCardComponent implements OnInit {

  @Input() steps: string;
  stepsMap: any

  constructor() { }

  ngOnInit(): void {
    this.stepsMap = JSON.parse(this.steps);
  }

  get stepsString(): string {
    return JSON.stringify(this.stepsMap["content"])
  }

}
