import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// ionic
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { RouteReuseStrategy } from "@angular/router";
// app auth
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    SigninComponent,
    ResetPasswordComponent,
    ProfileComponent
  ],
  imports: [CommonModule, IonicModule, AuthRoutingModule],
  exports: [
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
})
export class AuthModule {}
