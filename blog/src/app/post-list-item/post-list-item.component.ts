import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post : any ;
  constructor() { }

  ngOnInit() {
  }
love(i : number){
if(i >0) return true;
else return false;

}
loveNot(i : number){
if(i<0) return true;
else return false;

}
addLove(i : number, post : any){
post.loveIts+= i;
}
}
