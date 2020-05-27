import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private accessKey: string;
  public ipAddress: string;
  public address: string;

  constructor(private http: HttpClient) {
    this.accessKey = '8ed431f356d0a5bbd4268dd5354ec78c';
  }

  ngOnInit() {
    this.getIpAddress();
  }

  getIpAddress() {
    this.http.get('http://api.ipstack.com/check?access_key=' + this.accessKey)
      .pipe(map(result => (result as any)))
      .subscribe(result => {
        if (result != null) {
          this.ipAddress = result.ip;
          this.address = result.city + ', ' + result.region_name + ', ' + result.country_name;
        }
      }, error => {
        console.error(error);
      });
  }
}
