import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { MathEditorComponent } from './math-editor/math-editor.component';
import { CommonModule } from '@angular/common';
import { MathjaxModule } from 'mathjax-angular';
import { AboutPageComponent } from './about-page/about-page.component';
import { StepCardComponent } from './cards/step-card/step-card.component';
import { StepItemComponent } from './cards/step-card/step-item/step-item.component';
import { GrapherComponent } from './grapher/grapher.component';
import { LatexCardComponent } from './cards/latex-card/latex-card.component';
import { GrapherDialogComponent } from './grapher/grapher-dialog/grapher-dialog.component';
import { OdePageComponent } from './ode-page/ode-page.component';
import { MatrixPageComponent } from './matrix-page/matrix-page.component';
import { SystemEquationComponent } from './matrix-page/system-equation/system-equation.component';
import { SingleMatrixComponent } from './matrix-page/single-matrix/single-matrix.component';
import { MatrixMultipleComponent } from './matrix-page/matrix-multiple/matrix-multiple.component';
import { MatrixViewComponent } from './matrix-page/matrix-multiple/matrix-view/matrix-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MathEditorComponent,
    AboutPageComponent,
    StepCardComponent,
    StepItemComponent,
    GrapherComponent,
    LatexCardComponent,
    GrapherDialogComponent,
    OdePageComponent,
    MatrixPageComponent,
    SystemEquationComponent,
    SingleMatrixComponent,
    MatrixMultipleComponent,
    MatrixViewComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MaterialModule,
    MathjaxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
