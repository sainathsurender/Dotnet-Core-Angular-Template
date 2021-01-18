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

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'Date' }, { name: 'TemperatureC' }, { name: 'Summary' }];

  constructor(_service: HttpService) {
    _service.GetServices('api/WeatherForecast/GetData').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}