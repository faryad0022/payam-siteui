import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Slider } from 'src/app/data/api/sliders/slider';
import { SliderResponse } from 'src/app/data/api/sliders/sliderResponse';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private homeSliders: BehaviorSubject<Slider[]>= new BehaviorSubject<Slider[]>([]);
  constructor(private http: HttpClient) { }

  public getActiveSliders(): Observable<SliderResponse>
  {
    return this.http.get<SliderResponse>('/slider/GetActiveSliders');
  }
  public getCurrentSliders():Observable<Slider[]>{
    return this.homeSliders;
  }
  public setCurrentSliders(sliders: Slider[]){
    this.homeSliders.next(sliders);
  }
}
