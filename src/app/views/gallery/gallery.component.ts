import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/core/services/gallery/image.service';
import { FilterGalleryDTO } from 'src/app/data/api/gallery/FilterGalleryDTO';
import { ToastrService } from 'ngx-toastr';
import { DomainName } from 'src/app/core/config/pathUtility/pathTool';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public _album: Array<any> = [];
  filterImage: FilterGalleryDTO = new FilterGalleryDTO(
    '',[],1,0,1,0,0,10,0);
  domainName = DomainName;
  pages: number[] = [];
  constructor(
    public _lightbox: Lightbox,
    private imageService: ImageService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService) {

     }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(params => {
      let pageId = 1;
      if(params.pageId !== undefined)
      {
        this.filterImage.pageId = parseInt(params.pageId);
      }
      
      this.getImages();
      
    });
  }



  setPage(page: number){
    this.router.navigate(['gallery'], {queryParams: {pageId: page}});
    
  }
  prevPage(){
    let page = this.filterImage.pageId;
    if(page>1){
      this.filterImage.pageId = page -1;
    }

    this.router.navigate(['gallery'], {queryParams: {pageId: page}});

  }
  nextPage(){
    let page = this.filterImage.pageId;
    if(page<this.filterImage.pageCount){
      this.filterImage.pageId = page + 1;
    }

    this.router.navigate(['gallery'], {queryParams: {pageId: page}});
  }



  openLightBox(index: number): void {
    // open lightbox
    const options = {
      wrapAround: true,
      showImageNumberLabel: true,
      showZoom: true,
      showRotate: true,
      alwaysShowNavOnTouchDevices: true
    }
    this._lightbox.open(this._album, index, options);
  }
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }


  setLightBoxAlbum(images: any[]){
    this._album = [];
    for (let i =0; i <images.length ; i++){
      const src = this.domainName + '/images/gallery/origin/'+images[i].imageName;
      const caption = images[i].description;
      //const thumb = 'demo/img/image' + i + '-thumb.jpg';
      const album = {
         src: src,
         caption: caption,
         //thumb: thumb
      };
      this._album.push(album);
    }

  }
  getImages(){
      this.imageService.getImages(this.filterImage).subscribe(res => {
        
      if (res.data.images.length > 0) {
        this.filterImage = res.data; 
        this.setLightBoxAlbum(this.filterImage.images);       
        this.pages = [];
        for (let i = this.filterImage.startPage; i <= this.filterImage.endPage; i++) {
          this.pages.push(i);
        }
      }
      else {
        this.toastr.info('عکسی یافت نشد ', 'Info');
        this.router.navigate(['/']);
      }

    });
  }

}
