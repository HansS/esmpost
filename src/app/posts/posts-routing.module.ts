import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostsComponent } from "./posts.component";
import { PostListComponent } from "./components/post-list/post-list.component";

const routes: Routes = [
  {
    path: "",
    component: PostsComponent,
    children: [{ path: "list", component: PostListComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
