import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeoService } from 'src/app/core/config/seoConfig/seo.service';
import { AboutService } from 'src/app/core/services/about/about.service';
import { AboutDTO } from 'src/app/data/api/About/aboutDTO';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  subManager = new Subscription();
  text = '';
  constructor(
    private seoService: SeoService,
    private aboutService: AboutService
  ) {
    this.seoService.generateTags({
      title: 'درباره ما',
      description: 'دکتر پیام ابوالحسنی متخصص جراحی گوش و حلق و بینی',
      keywords: 'جراحی بینی, زیبایی , رینوپلاستی , زیبایی بینی,دکتر خوب , نظرات,بینی گوشتی , بینی استخوانی  ,مراقبت بعد از عمل زیبایی  , پیام ابوالحسنی  ,بینی  , جراحی',
      image: 'https://dr-payamabolhassani.com/images/og/opengraph.png',
      url: '/about',
    });
   }
  ngOnDestroy(): void {
      this.subManager.unsubscribe();
  }
  ngOnInit(): void {
    this.subManager.add(
      this.aboutService.getAboutPage().subscribe(res=> {
        
        if(res.status === "Success"){
          this.text = res.data.text;
          
        }
      })
    );
  }

}
