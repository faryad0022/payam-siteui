import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule } from '@angular/router';
import { GalleryRoutingModule } from './gallery-routing.module';
import { ImageService } from 'src/app/core/services/gallery/image.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from 'src/app/core/config/interceptor/interceptor';
import { LightboxModule } from 'ngx-lightbox';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GalleryRoutingModule,
    HttpClientModule,
    LightboxModule
  ],
  providers: [
    ImageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ]
})
export class GalleryModule { }
