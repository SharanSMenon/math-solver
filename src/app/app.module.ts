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
