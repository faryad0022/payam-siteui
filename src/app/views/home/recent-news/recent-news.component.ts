import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomainName } from 'src/app/core/config/pathUtility/pathTool';
import { BlogGroupService } from 'src/app/core/services/blog/blogGroup.service';
import { BlogDTO } from 'src/app/data/api/blog/BlogDTO';

@Component({
  selector: 'app-recent-news',
  templateUrl: './recent-news.component.html',
  styleUrls: ['./recent-news.component.scss']
})
export class RecentNewsComponent implements OnInit, OnDestroy {
  subManager = new Subscription();
  latestBlog: any[] = [];
  domainName = DomainName;

  constructor(
    private blogService: BlogGroupService
  ) { }
  ngOnDestroy(): void {
      this.subManager.unsubscribe();
  }
  ngOnInit(): void {
    this.subManager.add(
      this.blogService.getLatestBlogs().subscribe(res => {
        if(res.status === "Success"){
          this.latestBlog = res.data;
        }
      })
    );
  }

}
