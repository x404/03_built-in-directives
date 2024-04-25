import { Component } from '@angular/core';

@Component({
  selector: 'app-03_ngIf',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  public showUl: boolean = true;
  toggleVisibility(){
    this.showUl = !this.showUl;
  }
}
