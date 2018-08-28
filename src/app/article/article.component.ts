import { Component, OnInit } from "@angular/core";
import { BlogService, Post } from "../services/blog.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  public currentPost: Post = {
    title: "",
    type: "",
    description: "",
    tags: []
  };

  public constructor(private blog: BlogService) {}

  public ngOnInit(): void {
    this.blog.currentPost.subscribe(post => (this.currentPost = post));
  }
}
