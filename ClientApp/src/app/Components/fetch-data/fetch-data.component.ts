import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WeatherForecast } from 'src/app/Shared/weather-forcast/weather-forcast';
import { HttpService } from "../../Services/http.service";

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: any;

  constructor(_service: HttpService) {
    _service.GetServices('weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}