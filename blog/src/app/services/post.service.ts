import { Subject } from 'rxjs';

export class PostService {
    postsSubject = new Subject<any[]>();
    private posts = [
        {
            title: "Mon premier post",
            content: "Ceci est un contenu",
            loveIts: 2,
            created_at: new Date()
        },
        {
            title: "Mon deuxième post",
            content: "Ceci est un contenu",
            loveIts: -1,
            created_at: new Date()
        },
        {
            title: "Mon dernier post",
            content: "Ceci est un contenu",
            loveIts: 1,
            created_at: new Date()
        }
    ];

    emitPostsSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    addPost(title: string, content: string) {
        this.posts.push({
            title: title,
            content: content,
            loveIts: 0,
            created_at: new Date()
        });
        this.emitPostsSubject();
    }

    deletePost(index: number) {
        this.posts.splice(index, 1);
        this.emitPostsSubject();
    }

    modifyLove(love: number, index: number) {
        this.posts[index].loveIts = this.posts[index].loveIts + love;
        this.emitPostsSubject();
    }

}