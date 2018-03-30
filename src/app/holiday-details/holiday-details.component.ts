import { HolidayService } from './../holiday.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {

  datekey: string;

  constructor(private _holidayService: HolidayService,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.datekey = params['date'];
      
  });
  }

  holidayData;
  ngOnInit() {
    this._holidayService.getHolidayDetail(this.datekey).subscribe(data =>  this.holidayData = data);
    
  }


}
