import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta) { }

  generateTags(config:any) {
    config = {
      title: 'رینوپلاستی | دکتر پیام ابوالحسنی',
      description: 'دکتر پیام ابوالحسنی متخصص جراحی گوش و حلق و بینی',
      keywords: 'جراحی بینی, زیبایی , رینوپلاستی , زیبایی بینی,دکتر خوب , نظرات,بینی گوشتی , بینی استخوانی  ,مراقبت بعد از عمل زیبایی  , پیام ابوالحسنی  ,بینی  , جراحی',
      image: 'https://dr-payamabolhassani.com/images/og/opengraph.png',
      url: '',
      ...config
    }

    this.meta.updateTag({ name: 'keywords', content: config.keywords });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@dr.payam.abolhassani' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'dr-payamabolhassani' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://dr-payamabolhassani.com${config.url}` });
    
  }

  updateTitle(title: string) {
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ property: 'og:title', content: title });
  }

  

}