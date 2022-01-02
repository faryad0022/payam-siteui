import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { ContainerModule } from '../container/container.module';
import { RouterModule } from '@angular/router';
import { AddressService } from '../core/services/address/address.service';
import { MainPageResolver } from '../core/resolvers/mainPage.resolver';
import { MainpageService } from '../core/services/mainPage/main-page.service';



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
    AddressService,
    MainpageService,
    MainPageResolver
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewsModule { }
