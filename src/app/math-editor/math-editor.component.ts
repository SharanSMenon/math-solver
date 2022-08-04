import { Component, ViewChild, ElementRef, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MathfieldElement } from 'mathlive';
import { Equation } from '../shared/enums';
import {mathKeyboard, mathKeyboardLayer } from "../shared/keyboard"
declare var length: any;

@Component({
  selector: 'math-editor',
  templateUrl: './math-editor.component.html',
  styleUrls: ['./math-editor.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MathEditorComponent), multi: true }
  ]

})
export class MathEditorComponent implements OnInit {

  @Input('uuid') id: string

  @ViewChild('mathfield') mathinput: ElementRef;
  mathlive: MathfieldElement

  @Input('value') value: string;

  @Output() onValueChange = new EventEmitter<Equation>();

  constructor() {
  }

  ngOnInit(): void {
    this.mathlive = new MathfieldElement({
      fontsDirectory: 'assets/mathlive/fonts',  // https://cortexjs.io/mathlive/guides/integration/.
      soundsDirectory: 'assets/mathlive/sounds',  // See angular.json.
      virtualKeyboardMode: 'onfocus',  // https://cortexjs.io/mathlive/guides/virtual-keyboards/.
      customVirtualKeyboards: mathKeyboard,
      customVirtualKeyboardLayers: mathKeyboardLayer,
      virtualKeyboards: 'math-basic math-math math-english math-greek',
    })
    this.mathlive.value = this.value;
  }

  ngAfterViewInit() {
    this.mathinput.nativeElement.appendChild(this.mathlive);
    this.mathlive.addEventListener('change', (e) => {
      this.onValueChange.emit({
        id: this.id,
        value: this.mathlive.value
      })
    })
  }
}
