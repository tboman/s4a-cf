import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { AfricaGuide } from "./app/africa";
import { WestGuide } from "./app/west";
import { PublicComponent } from "./app/public.component";
import { HomeComponent } from "./app/home.component";
import { AboutComponent } from "./app/about.component";
import { LogoutComponent } from "./app/logout/logout.component";
import { OfferComponent } from "./app/offer/offer.component";
import { RequestComponent } from "./app/request/request.component";
import { RegisterComponent } from "./app/register/register.component";
import { LoginComponent } from "./app/login/login.component";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth-guard.service";
import { AdminGuard } from "./services/admin-guard.service";
import { OffersComponent } from "./app/admin/offers/offers.component";
import { RequestsComponent } from "./app/admin/requests/requests.component";
import { MatchingComponent } from "./app/admin/matching/matching.component";
import { InterestsComponent } from "./app/admin/interests/interests.component";
import { FieldsComponent } from "./app/admin/fields/fields.component";

const ADMIN_ROUTES: Route[] = [
  { path: "offers", component: OffersComponent },
  { path: "requests", component: RequestsComponent },
  { path: "matching", component: MatchingComponent },
  { path: "interests", component: InterestsComponent },
  { path: "fields", component: FieldsComponent }
];
const CDK_ROUTES: Route[] = [];
const ALL_ROUTES: Routes = [
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "offer", component: OfferComponent, canActivate: [AuthGuard] },
  { path: "request", component: RequestComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent },
  { path: "about", component: AboutComponent },
  { path: "logout", component: LogoutComponent },
  { path: "cdk", children: CDK_ROUTES },
  { path: "admin", children: ADMIN_ROUTES, canActivate: [AdminGuard] },
  { path: "**", component: PublicComponent }
];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(ALL_ROUTES);
