import { Component } from '@angular/core';

@Component({
  selector: 'app-04_ngFor',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  public items: (string|number)[] = ['1', 'a', '2', 'b', 3, 4]

}
