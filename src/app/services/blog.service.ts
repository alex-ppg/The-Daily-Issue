import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject, Observable } from "rxjs";

export interface Post {
  title: string;
  description: string;
  type: string;
  tags: Array<string>;
  fullText?: string;
  isSelected?: boolean;
}

export interface Category {
  name: string;
  postCount: number;
}

@Injectable({
  providedIn: "root"
})
export class BlogService {
  private postSource: BehaviorSubject<Post> = new BehaviorSubject({
    title: "",
    description: "",
    type: "",
    tags: [],
    fullText: "",
    isSelected: true
  });

  public currentPost: Observable<Post> = this.postSource.asObservable();

  constructor(private http: HttpClient) {}

  public fetchPosts(): Promise<Array<Post>> {
    // this.http.get('')
    return Promise.resolve([
      {
        title: "How to handle CORS in Angular",
        description:
          "A guide on how to properly implement CORS inside an Angular CLI project with the help of HTTP interceptors",
        type: "Angular",
        tags: ["angular-cli", "cors", "typescript", "http-interceptor"]
      },
      {
        title: "How to handle CERS in Angular",
        description:
          "A guide on how to properly implement CORS inside an Angular CLI project with the help of HTTP interceptors",
        type: "Angular",
        tags: ["angular-cli", "cors", "typescript", "http-interceptor"]
      },
      {
        title: "How to handle CIRS in Angular",
        description:
          "A guide on how to properly implement CORS inside an Angular CLI project with the help of HTTP interceptors",
        type: "Angular",
        tags: ["angular-cli", "cors", "typescript", "http-interceptor"]
      },
      {
        title: "How to handle CURS in Angular",
        description:
          "A guide on how to properly implement CORS inside an Angular CLI project with the help of HTTP interceptors",
        type: "Angular",
        tags: ["angular-cli", "cors", "typescript", "http-interceptor"]
      },
      {
        title: "How to handle CΑRS in Angular",
        description:
          "A guide on how to properly implement CORS inside an Angular CLI project with the help of HTTP interceptors",
        type: "Angular",
        tags: ["angular-cli", "cors", "typescript", "http-interceptor"]
      }
    ]);
  }

  public fetchCategories(): Promise<Array<Category>> {
    // this.http.get('')
    return Promise.resolve([
      {
        name: "Angular",
        postCount: 3
      },
      {
        name: "TypeScript",
        postCount: 3
      },
      {
        name: "Node.JS",
        postCount: 3
      },
      {
        name: "GoLang",
        postCount: 3
      },
      {
        name: "Hyperledger Fabric",
        postCount: 3
      },
      {
        name: "Blockchain",
        postCount: 3
      },
      {
        name: "Express",
        postCount: 3
      },
      {
        name: "Hapi",
        postCount: 3
      }
    ]);
  }

  public changeActivePost(post: Post): void {
    this.postSource.next(post);
  }
}
