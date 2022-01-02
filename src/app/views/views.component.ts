import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MainpageService} from '../core/services/mainPage/main-page.service';
import {MainPageDTO} from '../data/api/MainPage/MainPageDTO';

@Component({selector: 'app-views', templateUrl: './views.component.html', styleUrls: ['./views.component.scss']})
export class ViewsComponent implements OnInit,
OnDestroy {
    subManager = new Subscription();
    defaultMobile: string = '';
    mainPageDetails : MainPageDTO = {
        addresses: [],
        socials: [],
        latestBlogs: [],
        sliders: []
    };
    constructor(private maigPageService : MainpageService) {}
    ngOnDestroy(): void {
        this.subManager.unsubscribe();
    }
    ngOnInit(): void {
        this.subManager.add(this.maigPageService.getDetails().subscribe(res => {
            if (res.data.addresses.length > 0) {
              this.defaultMobile = res.data.addresses[0].cellPhone;
                this.mainPageDetails = res.data;                                
            }
        }));
    }

}
