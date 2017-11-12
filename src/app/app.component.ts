import {Component} from '@angular/core';

declare let ClientIP: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'YOUR IP ADDRESS - ';
  IP = '';

  constructor() {
    this.IP = ClientIP;

  }

}
