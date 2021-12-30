import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';
import { Subscription } from 'rxjs';
import { BlogGroupService } from 'src/app/core/services/blog/blogGroup.service';

@Component({
  selector: 'app-blogs-view',
  templateUrl: './blogs-view.component.html',
  styleUrls: ['./blogs-view.component.css']
})
export class BlogsViewComponent implements OnInit, OnDestroy {
  subManager = new Subscription();
  blogId: any;
  blogTitle: any;
  blog: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogGroupService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
      this.subManager.unsubscribe();
  }
  ngOnInit() {
    this.subManager.add(
          this.activatedRoute.paramMap.subscribe(params => { 
      this.blogId = params.get("blogId");
      this.blogTitle = params.get("blogTitle");
    }));

    this.subManager.add(
      this.blogService.getBlogById(parseInt(this.blogId)).subscribe(res=> {
        if(res.status === "Success"){
          this.blog = res.data;
          
        }
        if(res.status === "NotFound"){
          this.router.navigate(['/blogs']);
        }
      })
    );
  }

}
