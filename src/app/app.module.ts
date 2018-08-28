import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { ArticleComponent } from "./article/article.component";

@NgModule({
  declarations: [AppComponent, SideBarComponent, ArticleComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
