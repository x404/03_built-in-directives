import { Component } from '@angular/core';

@Component({
  selector: 'app-01_ngClass',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  settings = {
    accent: true,
    error: true,
    highlighted: false
  }

  public value: string = ''

  onInput(event: Event) {
    this.value = (<HTMLInputElement>event.target).value;
  }
}
