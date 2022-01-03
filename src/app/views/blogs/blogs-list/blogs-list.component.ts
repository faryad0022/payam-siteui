import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DomainName } from 'src/app/core/config/pathUtility/pathTool';
import { SeoService } from 'src/app/core/config/seoConfig/seo.service';
import { BlogGroupService } from 'src/app/core/services/blog/blogGroup.service';
import { FilterBlogDTO } from 'src/app/data/api/blog/FilterBlogDTO';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit, OnDestroy {
  subManager = new Subscription();
  blogGroups : any[] = [];
  domainName = DomainName;
  filterBlog: FilterBlogDTO = new FilterBlogDTO(
    '', [], 1, 0, 1, 0, 0, 16, 0);
  blogs: any[] = [];
  pages: number[] = []; 
  constructor(
    private activatedRoute : ActivatedRoute, 
    private router: Router,
    private blogService: BlogGroupService,
    private seoService: SeoService
  ) {
    this.seoService.generateTags({
      title: 'مطالب و مقالات',
      description: 'دکتر پیام ابوالحسنی متخصص جراحی گوش و حلق و بینی',
      keywords: 'جراحی بینی, زیبایی , رینوپلاستی , زیبایی بینی,دکتر خوب , نظرات,بینی گوشتی , بینی استخوانی  ,مراقبت بعد از عمل زیبایی  , پیام ابوالحسنی  ,بینی  , جراحی',
      image: 'https://dr-payamabolhassani.com/images/og/opengraph.png',
      url: '/blogs',
    });
   }

  ngOnInit() {
    
    this.activatedRoute.queryParams.subscribe(params => {

      let pageId = 1;
      if (params.pageId !== undefined) {
        pageId = parseInt(params.pageId, 0);
      }
      this.filterBlog.pageId = pageId;
      this.getBlogs();
    });
    this.subManager.add(this.activatedRoute.data.subscribe(res => {      
      this.blogGroups = res.blogGroups.data;      
  }));

  }
  ngOnDestroy(): void {
    this.subManager.unsubscribe();
}
getBlogs(){
  this.blogService.getAllBlogsByfIlterAndPaging(this.filterBlog).subscribe(res=> {
    this.filterBlog = res.data;
    this.blogs = res.data.blogs;
    if (res.data.title === null) {
      this.filterBlog.title = 'All';
    }
    this.pages = [];
      for (let i = this.filterBlog.startPage; i <= this.filterBlog.endPage; i++) {
        this.pages.push(i);
      }
    

});
}
setPage(page: number) {
  this.router.navigate(['blogs/list'], { queryParams: { pageId: page } });    
  this.filterBlog.pageId = page;
}
prevPage() {
  let page = this.filterBlog.pageId;

  if (page > 1) {
    this.filterBlog.pageId = page - 1;
    page = page - 1;
  }

  this.router.navigate(['/blogs/list'], { queryParams: { pageId: page } });
  this.filterBlog.pageId = page;
  this.blogService.getAllBlogsByfIlterAndPaging(this.filterBlog);

}
nextPage() {

  let page = this.filterBlog.pageId;

  if (page < this.filterBlog.pageCount) {
    this.filterBlog.pageId = page + 1;
    page = page + 1;
  }

  this.router.navigate(['/blogs/list'], { queryParams: { pageId: page } });
  this.filterBlog.pageId = page;
  this.blogService.getAllBlogsByfIlterAndPaging(this.filterBlog);
}
getFilterBlog(event: any){  
  if (this.filterBlog.title === undefined || this.filterBlog.title === null) {
    this.filterBlog.title = 'All';
  }
  if(event === 'All') {    
    this.filterBlog.title = 'All';
    
  }else {
    this.filterBlog.title = event.title;
  }
  this.filterBlog.pageId = 1,
  this.filterBlog.activePage = 1,
  this.filterBlog.startPage = 0,
  this.filterBlog.endPage = 0,
  this.filterBlog.pageCount = 0,
  this.getBlogs();

}
}
