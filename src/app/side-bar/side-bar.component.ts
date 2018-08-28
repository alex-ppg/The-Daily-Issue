import { Component, OnInit } from "@angular/core";
import { BlogService, Post, Category } from "../services/blog.service";
import * as ColorHash from "color-hash";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent implements OnInit {
  public posts: Array<Post>;
  public categories: Array<Category>;
  public showCategories: boolean = false;
  private colorHasher: ColorHash = new ColorHash({ saturation: 1 });

  constructor(private blog: BlogService) {
    this.blog.fetchPosts().then(posts => (this.posts = posts));
    this.blog
      .fetchCategories()
      .then(categories => (this.categories = categories));
  }

  ngOnInit() {}

  public changeActivePost(newPost: Post): void {
    this.blog.changeActivePost(newPost);
    this.posts = this.posts.map(post => {
      if (post.title !== newPost.title) {
        post.isSelected = false;
      } else {
        post.isSelected = true;
      }
      return post;
    });
  }

  public getColorFromString(type: string): string {
    const HSL = this.colorHasher.hsl(type);
    return `hsl(${HSL[0]},${HSL[1] * 100}%,${HSL[2] * 100}%)`;
  }

  public formatTags(tags: Array<string>): string {
    return tags.map(tag => `#${tag}`).join(" ");
  }
}
