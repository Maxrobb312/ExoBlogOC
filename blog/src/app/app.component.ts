import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts = [
{
title : "Mon premier post",
content : "Ceci est un contenu",
loveIts : 2,
created_at : new Date()
},
{
  title : "Mon deuxième post",
  content : "Ceci est un contenu",
  loveIts : -1,
  created_at : new Date()
  },
  {
    title : "Encore un post",
    content : "Ceci est un contenu",
    loveIts : 1,
    created_at : new Date()
    }
  ];
  title = 'blog';
}
