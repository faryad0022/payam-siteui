import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageResolver } from 'src/app/core/resolvers/mainPage.resolver';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '',  component: HomeComponent, resolve: {details: MainPageResolver},data: {title: ['صفحه اصلی']},},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
