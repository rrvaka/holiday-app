import { HolidayService} from './../holiday.service';
import { Component, OnInit } from '@angular/core';
import { IHoliday } from './holiday';
import { IHolidays } from './holidays';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',  
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  constructor(private _holidayService: HolidayService) { 
    
  }
  holidayData;
  keyDates: String[];

  ngOnInit() {
    this._holidayService.getHolidays().subscribe(data => {
      this.holidayData = data;
      //console.log("holiday data: "+ JSON.stringify(this.holidayData));
      let keys = Object.keys(this.holidayData.holidays);
      this.keyDates=keys;
      //console.log("keys: " + keys);
      
    })
  }

  

}
