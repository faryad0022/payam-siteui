import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { BookAppointmentComponent } from './home-slider/book-appointment/book-appointment.component';
import { RecentWorksComponent } from './recent-works/recent-works.component';
import { RecentNewsComponent } from './recent-news/recent-news.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeSliderComponent,
    BookAppointmentComponent,
    RecentWorksComponent,
    RecentNewsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ]
})
export class HomeModule { }
