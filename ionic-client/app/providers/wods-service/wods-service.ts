import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Wod } from '../../models/wod';

/*
  Generated class for the WodsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WodsService {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('http://localhost:3000/wods')
        .map(res => <Array<Wod>>res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }

  loadDetails(name: string) {
    return new Promise<Wod>(resolve => {
      this.http.get(`http://localhost:3000/wods/${name}`)
        .map(res => <Wod>(res.json()))
        .subscribe(wod => {
          resolve(wod);
        });
    });
  }
}
