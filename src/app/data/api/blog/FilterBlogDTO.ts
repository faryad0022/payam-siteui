import { BlogDTO } from "./BlogDTO";

export class FilterBlogDTO {
    constructor(
        public title: string,
        public blogs: BlogDTO[],
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
