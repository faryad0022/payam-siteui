import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewsComponent} from './views.component';

const routes: Routes = [{
        path: '',
        component: ViewsComponent,
        children: [
            {
                path: '',
                loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'contactus',
                loadChildren: () => import ('./contact-us/contact-us.module').then(m => m.ContactUsModule)
            },
            {
                path: 'gallery',
                loadChildren: () => import ('./gallery/gallery.module').then(m => m.GalleryModule)
            },
            {
                path: 'blogs',
                loadChildren: () => import ('./blogs/blogs.module').then(m => m.BlogsModule)
            },
            {
                path: 'about',
                loadChildren: () => import ('./about/about.module').then(m => m.AboutModule)
            },


        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule {}
