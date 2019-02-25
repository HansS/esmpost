import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// ionic
import { IonicModule } from "@ionic/angular";
import { Camera } from "@ionic-native/camera/ngx";
import { CamerasRoutingModule } from "./cameras-routing.module";
import { CamerasComponent } from "./cameras.component";

@NgModule({
  declarations: [CamerasComponent],
  imports: [CommonModule, IonicModule, CamerasRoutingModule],
  exports: [CamerasComponent],
  providers: [Camera]
})
export class CamerasModule {}
