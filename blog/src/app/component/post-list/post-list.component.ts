import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts = [];
  postSubscription: Subscription;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostsSubject();
  }
  
  addPost() {
    this.router.navigate(['/new']);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
