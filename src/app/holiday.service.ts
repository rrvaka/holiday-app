import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHolidayData } from './holiday/holidayData';
import { Observable } from 'rxjs/Observable';
import { IHoliday } from './holiday/holiday';


@Injectable()
export class HolidayService {

  private _url: string = "https://holidayapi.com/v1/holidays?key=66a1251f-0a0c-4bdb-a2e1-54d8ade9a747&country=US&year=2015&public=true&pretty=true"
  constructor(private http: HttpClient) { }

  
 // getHolidays() : string[] {
  //  return ["holiday1", "holiday2", "holiday3"];
  //}
  getHolidays():Observable<IHolidayData[]> {
    return this.http.get<IHolidayData[]>(this._url);
  }

  getHolidayDetail(dateKey: String):Observable<IHolidayData[]> {
    var a = dateKey.split("-");
    console.log("datekey "+ a);
    var newUrl = this._url+"&month="+a[1]+"&day="+a[2];
    console.log("new url   "+newUrl)
    return this.http.get<IHolidayData[]>(newUrl);
  }
}
