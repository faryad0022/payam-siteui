import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { ContainerModule } from '../container/container.module';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogsComponent } from './blogs/blogs.component';



@NgModule({
  declarations: [
    ViewsComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ContainerModule,
    RouterModule
  ]
})
export class ViewsModule { }
