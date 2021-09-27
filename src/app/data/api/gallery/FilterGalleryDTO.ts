import { GalleryDTO } from "./GalleryDTO";

export class FilterGalleryDTO {
    constructor(
         public title: string,
    public images: GalleryDTO[],


        public pageId:number,
        public pageCount: number,
        public activePage: number,
        public startPage:number,
        public endPage:number,
        public takeEntity:number,
        public skipEntity:number
    )
    {}
   
}
