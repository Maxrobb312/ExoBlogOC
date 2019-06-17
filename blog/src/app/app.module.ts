import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostListItemComponent } from './component/post-list-item/post-list-item.component';
import {PostService} from 'src/app/services/post.service';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './component/new-post/new-post.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'post', component: PostListComponent  },
  { path: 'new', component: NewPostComponent },
  { path: '**', component: PostListComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
