import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogGroupService } from 'src/app/core/services/blog/blogGroup.service';
import { BlogGroupResolver } from 'src/app/core/resolvers/blogGroup.resolver';
import { BlogsComponent } from './blogs.component';
import { BlogsViewComponent } from './blogs-view/blogs-view.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogsListComponent } from './blogs-list/blogs-list.component';



@NgModule({
  declarations: [
    BlogsComponent,
    BlogsViewComponent,
    BlogsListComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    BlogGroupService,
    BlogGroupResolver
  ]
})
export class BlogsModule { }
