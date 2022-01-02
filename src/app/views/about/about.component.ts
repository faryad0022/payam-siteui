import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
    private aboutService: AboutService
  ) { }
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
