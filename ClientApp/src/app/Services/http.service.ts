import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";

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

  PostData(url: string, data: any) : Observable<any> {
    console.log(data);
    return this.http.post<any>(this._baseUrl + url, data);
  }
}
  
