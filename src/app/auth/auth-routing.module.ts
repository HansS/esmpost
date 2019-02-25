import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      { path: "signin", component: SigninComponent },
      { path: "signup", component: SignupComponent },
      { path: "profile", component: ProfileComponent },
      { path: "reset", component: ResetPasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
