import { Component, Input, OnInit } from '@angular/core';
import { DomainName } from 'src/app/core/config/pathUtility/pathTool';
import { Slider } from 'src/app/data/api/sliders/slider';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {
  @Input() sliders: Slider[] = [];
  public domain: string = DomainName
  constructor() { }

  ngOnInit() {

  }

}
