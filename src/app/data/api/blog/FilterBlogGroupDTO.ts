import { BlogGroupDTO } from "./BlogGroupDTO";

export class FilterBlogGroupDTO {
    constructor(
        public title: string,
        public blogGroups: BlogGroupDTO[],
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
