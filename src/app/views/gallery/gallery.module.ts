import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule } from '@angular/router';
import { GalleryRoutingModule } from './gallery-routing.module';



@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
