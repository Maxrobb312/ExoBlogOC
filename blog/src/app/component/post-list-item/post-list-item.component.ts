import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: any;
  @Input() index: number;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addLove(i: number) {
    this.postService.modifyLove(i, this.index);
  }
  
  delete() {
    this.postService.deletePost(this.index);
  }
}
