import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  _baseUrl : string;
  constructor(private http: HttpClient,@Inject('BASE_URL') baseUrl: string) { 
    this._baseUrl = baseUrl;
  }

  GetServices(url: string){
      return this.http.get(this._baseUrl + url,{responseType: 'text'});
  }

  GetDataByType<T>(url: string){
    return this.http.get<T[]>(this._baseUrl + url);
}

  PostData(url: string, data: any) : Observable<any> {
    return this.http.post<any>(this._baseUrl + url, data);
  }
}
  
