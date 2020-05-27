import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private appId: string;
  private appCode: string;
  public now = new Date();

  public currentWeather = null;

  public constructor(private http: HttpClient) {
    this.appId = 'y4Zv2EY0r40RHiSmdvFl';
    this.appCode = 'wd3Q97awM0Id5LJNagQQPA';
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  public ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    // tslint:disable-next-line:max-line-length
    this.http.jsonp('https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&name=Shanghai&app_id=' + this.appId + '&app_code=' + this.appCode, 'jsonpCallback')
      .pipe(map(result => (result as any).observations.location))
      .subscribe(result => {
        if (result.length > 0) {
          this.currentWeather = result[0].observation[0];
        }
      }, error => {
        console.error(error);
      });
  }

}
