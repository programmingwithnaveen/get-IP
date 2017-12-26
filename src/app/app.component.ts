import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare let ClientIP: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   privateIP ;
    publicIP;
 

  constructor(private http: HttpClient) {
    /**
     * To read private IP
     */
    this.privateIP = ClientIP;

    /**
     * To read public IP
     */
    this.http.get('https://api.ipify.org?format=json').subscribe(data => {
      this.publicIP=data['ip'];
    });
  }

}
