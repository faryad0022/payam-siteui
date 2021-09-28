import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { ContainerModule } from '../container/container.module';
import { RouterModule } from '@angular/router';
import { AddressService } from '../core/services/address/address.service';



@NgModule({
  declarations: [
    ViewsComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ContainerModule,
    RouterModule
  ], 
  providers:[
    AddressService
  ]
})
export class ViewsModule { }
