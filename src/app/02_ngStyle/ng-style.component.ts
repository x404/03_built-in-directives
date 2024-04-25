import { Component } from '@angular/core';

@Component({
  selector: 'app-02_ngStyle',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {

  getStyles() {
    let styles = {
      color: 'red',
      fontWeight: 'bold',
      fontSize: "18px"
    }
    return styles;
  }
}
