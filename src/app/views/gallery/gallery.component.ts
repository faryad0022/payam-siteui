import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/core/services/gallery/image.service';
import { FilterGalleryDTO } from 'src/app/data/api/gallery/FilterGalleryDTO';
import { ToastrService } from 'ngx-toastr';
import { DomainName } from 'src/app/core/config/pathUtility/pathTool';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  filterImage!: FilterGalleryDTO;
  domainName = DomainName;
  constructor(
              private imageService: ImageService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(res=> {
      if(res.data.images.length > 0) {
        this.filterImage = res.data;   
      }
      else {
        this.toastr.info('عکسی یافت نشد ', 'Info');
        this.router.navigate(['/']);
      }
      
    });
  }

}
