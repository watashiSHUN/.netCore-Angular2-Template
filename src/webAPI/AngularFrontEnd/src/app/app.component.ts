import {Component, OnInit} from '@angular/core';
import {Value} from './value';
import {WebApiService} from './web-api-service.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WebApiService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  values;
  constructor(private _webapiService:WebApiService){}
  ngOnInit() {
     this._webapiService.getValues()
         .subscribe(
         values => {
             this.values = values;
         },
         error => alert(error));
 }
}
