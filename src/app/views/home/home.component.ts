import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SeoService } from 'src/app/core/config/seoConfig/seo.service';
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
    private seoService: SeoService
  ) { 
    this.seoService.generateTags({
      title: 'رینوپلاستی | دکتر پیام ابوالحسنی',
      description: 'دکتر پیام ابوالحسنی متخصص جراحی گوش و حلق و بینی',
      keywords: 'جراحی بینی, زیبایی , رینوپلاستی , زیبایی بینی,دکتر خوب , نظرات,بینی گوشتی , بینی استخوانی  ,مراقبت بعد از عمل زیبایی  , پیام ابوالحسنی  ,بینی  , جراحی',
      image: 'https://dr-payamabolhassani.com/images/og/opengraph.png',
      url: '',
    });
  }
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
