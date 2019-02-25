import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule"
  },
  {
    path: "camera",
    loadChildren: "./cameras/cameras.module#CamerasModule"
  },
  {
    path: "auth",
    loadChildren: "./auth/auth.module#AuthModule"
  },
  {
    path: "posts",
    loadChildren: "./posts/posts.module#PostsModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
