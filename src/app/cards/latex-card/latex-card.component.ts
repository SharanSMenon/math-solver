import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getCapitalizedName } from 'src/app/shared/utils';
import { OutputEType } from 'src/app/shared/enums'

@Component({
  selector: 'app-latex-card',
  templateUrl: './latex-card.component.html',
  styleUrls: ['./latex-card.component.scss']
})
export class LatexCardComponent implements OnInit {

  @Input('name') cardName: string
  @Input('latex') outputLatex: string
  @Input('showActions') showActions: boolean
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  actionName = "Get Steps"

  constructor() { }

  ngOnInit(): void {
  }

  get cardNameF() {
    const outputType: OutputEType = this.cardName as OutputEType
    return getCapitalizedName(outputType)
  }

  clickFunc() {
    console.log("click")
    this.onClick.emit();
  }

}
