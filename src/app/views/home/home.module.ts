import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { BookAppointmentComponent } from './home-slider/book-appointment/book-appointment.component';
import { RecentWorksComponent } from './recent-works/recent-works.component';
import { RecentNewsComponent } from './recent-news/recent-news.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { SliderService } from 'src/app/core/services/slider/slider.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from 'src/app/core/config/interceptor/interceptor';
import { AppointmentService } from 'src/app/core/services/appointment/appointment.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BlogGroupService } from 'src/app/core/services/blog/blogGroup.service';

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
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    SweetAlert2Module.forRoot()

  ],
  providers: [
    SliderService,
    BlogGroupService,
    AppointmentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ]
})
export class HomeModule { }
