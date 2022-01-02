import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomainName } from 'src/app/core/config/pathUtility/pathTool';

@Component({
  selector: 'app-recent-news',
  templateUrl: './recent-news.component.html',
  styleUrls: ['./recent-news.component.scss']
})
export class RecentNewsComponent implements OnInit, OnDestroy {
  subManager = new Subscription();
  public domainName: string = DomainName

  @Input() latestBlog: any[] = [];

  constructor(
  ) { }
  ngOnDestroy(): void {
      this.subManager.unsubscribe();
  }
  ngOnInit(): void {
  }

}
