import { Component, OnInit } from '@angular/core';
import { DomainName } from 'src/app/core/config/pathUtility/pathTool';
import { SliderService } from 'src/app/core/services/slider/slider.service';
import { Slider } from 'src/app/data/api/sliders/slider';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {
  public sliders: Slider[] = [];
  public domain: string = DomainName
  constructor(private sliderService: SliderService) { }

  ngOnInit() {
    this.sliderService.getCurrentSliders().subscribe(sliders => {
      if (sliders.length === 0) {
        this.sliderService.getActiveSliders().subscribe(res => {
          if (res.status == 'Success') {
            this.sliderService.setCurrentSliders(res.data);
          }
        });
      } else {
        this.sliders = sliders;
      }
      
    });

  }

}
