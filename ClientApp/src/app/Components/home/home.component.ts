import { Component } from '@angular/core';
import { HttpService } from "../../Services/http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  _feed : any;

  constructor(_service: HttpService) {
    // _service.GetServices('api/WeatherForecast/GetFeed').subscribe(result => {
    //   this._feed = result;
    // }, error => console.error(error));


    _service.GetServices('api/WeatherForecast/GetString').subscribe(result => {
      // this._feed = result;
    }, error => console.error(error));
  }
}
