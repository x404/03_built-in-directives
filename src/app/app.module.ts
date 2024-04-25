import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLink, RouterModule, RouterOutlet, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgClassComponent } from "./attributive-directives/01_ngClass/ng-class.component";
import { NgStyleComponent } from "./attributive-directives/02_ngStyle/ng-style.component";
import { NgIfComponent } from "./structural-directives/03_ngIf/ng-if.component";
import { NgSwitchComponent } from "./structural-directives/04_ngSwitch/ng-switch.component";
import { NgForComponent } from "./structural-directives/04_ngFor/ng-for.component";
import { NgReferenceVariableComponent } from './ng-reference-variable/ng-reference-variable.component';

const appRoutes: Routes = [
  { path: 'ng-class', component: NgClassComponent},
  { path: 'ng-style', component: NgStyleComponent},
  { path: 'ng-if', component: NgIfComponent},
  { path: 'ng-switch', component: NgSwitchComponent},
  { path: 'ng-for', component: NgForComponent},
  { path: 'ng-reference-variable', component: NgReferenceVariableComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NgClassComponent,
    NgStyleComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    NgReferenceVariableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterLink,
    RouterOutlet,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
