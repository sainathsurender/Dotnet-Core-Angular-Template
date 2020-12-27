import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  _baseUrl : string;
  constructor(private http: HttpClient,@Inject('BASE_URL') baseUrl: string) { 
    this._baseUrl = baseUrl;
  }

  GetServices(url: string){
      console.log(this._baseUrl + url);
      return this.http.get(this._baseUrl + url);
  }  
}
  
