import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainPageResolver } from '../core/resolvers/mainPage.resolver';
import {ViewsComponent} from './views.component';

const routes: Routes = [{
        path: '',
        component: ViewsComponent,
        children: [
            {
                path: '',
                loadChildren: () => import ('./home/home.module').then(m => m.HomeModule),
                data: {title: ['صفحه اصلی']},
            },
            {
                path: 'home',
                loadChildren: () => import ('./home/home.module').then(m => m.HomeModule),
                data: {title: ['صفحه اصلی']},
                
            },
            {
                path: 'contactus',
                loadChildren: () => import ('./contact-us/contact-us.module').then(m => m.ContactUsModule),
                data: {title: ['تماس با ما']},
            },
            {
                path: 'gallery',
                loadChildren: () => import ('./gallery/gallery.module').then(m => m.GalleryModule),
                data: {title: ['نمونه جراحی بینی / عمل زیبایی']},
            },
            {
                path: 'blogs',
                loadChildren: () => import ('./blogs/blogs.module').then(m => m.BlogsModule),
                data: {title: ['مطالب و مقالات']},
            },
            {
                path: 'about',
                loadChildren: () => import ('./about/about.module').then(m => m.AboutModule),
                data: {title: ['درباره']},
            },


        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule {}
