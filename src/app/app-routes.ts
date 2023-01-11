import { Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { MenuComponent } from "./menu/menu.component";

const ROUTES: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'menu', component: MenuComponent}
];

export { ROUTES};