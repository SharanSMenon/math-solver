import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { GrapherComponent } from './grapher/grapher.component';
import { HomeComponent } from './home/home.component';
import { MatrixPageComponent } from './matrix-page/matrix-page.component';
import { OdePageComponent } from './ode-page/ode-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutPageComponent },
  { path: 'ode-solver', component: OdePageComponent },
  { path: 'matrix', component: MatrixPageComponent },
  { 
    path: 'graph',  
    loadChildren: () => import('./grapher/grapher.module').then(m => m.GrapherModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
