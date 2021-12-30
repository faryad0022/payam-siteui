import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { AboutRoutingModule } from './about-routing.module';
import { AboutService } from 'src/app/core/services/about/about.service';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AboutRoutingModule
  ],
  providers: [
    AboutService
  ]
})
export class AboutModule { }
