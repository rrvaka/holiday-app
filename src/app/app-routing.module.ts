import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';
import { HolidayComponent } from './holiday/holiday.component';
import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


const appRoutes: Routes = [
  {path: 'holiday', component: HolidayComponent},
  {path: 'holidayDetails', component: HolidayDetailsComponent}
]; 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [HolidayComponent, HolidayDetailsComponent] 
