import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgClassComponent } from './01_ngClass/ng-class.component';
import { RouterLink, RouterModule, RouterOutlet, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: 'ng-class', component: NgClassComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NgClassComponent
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
