import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGroupResolver } from 'src/app/core/resolvers/blogGroup.resolver';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsViewComponent } from './blogs-view/blogs-view.component';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
  {path: '',
   component: BlogsComponent,
   children: [
     {path: 'list', component: BlogsListComponent, resolve: {blogGroups: BlogGroupResolver}},
     {path: 'blog/:blogId/:blogTitle',  component: BlogsViewComponent},
   ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
