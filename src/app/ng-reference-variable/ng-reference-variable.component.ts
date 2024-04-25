import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-reference-variable',
  templateUrl: './ng-reference-variable.component.html',
  styleUrls: ['./ng-reference-variable.component.css']
})
export class NgReferenceVariableComponent {
  public result: number | undefined;

  calculateSum(value1: string, value2: string): void {
    this.result =  +value1 + +value2
  }
}
