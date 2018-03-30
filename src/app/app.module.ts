import { RouterModule, Routes, provideRoutes } from '@angular/router';
import { routingComponents, AppRoutingModule } from './app-routing.module';
import { HolidayService } from './holiday.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule } from "@angular/material";


import { AppComponent } from './app.component';
import { UsertableComponent } from './usertable/usertable.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule
  ],
  providers: [HolidayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
