import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogDTO } from 'src/app/data/api/blog/BlogDTO';
import { MainPageDTO } from 'src/app/data/api/MainPage/MainPageDTO';
import { Slider } from 'src/app/data/api/sliders/slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  subManager = new Subscription();
  sliders: Slider[];
  latestBlog: BlogDTO[];
  constructor(
    private activatedRoute : ActivatedRoute, 

  ) { }
  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }
  ngOnInit(): void {
    this.subManager.add(
      this.activatedRoute.data.subscribe(res => {
        this.sliders = res.details.data.sliders;
        this.latestBlog = res.details.data.latestBlogs;        
      })
    );
  }

}
