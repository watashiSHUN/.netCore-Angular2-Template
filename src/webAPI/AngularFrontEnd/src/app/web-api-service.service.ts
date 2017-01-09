import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Value} from './value';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WebApiService {
  private _url = '/api/values/';
  constructor(private http:Http) { }
  getValues() {
          return this.http.get(this._url)
              .map(responce => <Value>responce.json())
              .catch(error => {
                  console.log(error);
                  return Observable.throw(error);
              });
    }
}
