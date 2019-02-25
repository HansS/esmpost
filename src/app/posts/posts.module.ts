import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// ionic
import { IonicModule } from "@ionic/angular";
import { PostsRoutingModule } from "./posts-routing.module";
import { PostsComponent } from "./posts.component";
import { PostListComponent } from "./components/post-list/post-list.component";

@NgModule({
  declarations: [PostsComponent, PostListComponent],
  imports: [CommonModule, IonicModule, PostsRoutingModule]
})
export class PostsModule {}
