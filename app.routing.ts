import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AfricaGuide } from './app/africa';
import { WestGuide } from './app/west';
import { PublicComponent } from './app/public.component';
import { HomeComponent } from './app/home.component';
import { AboutComponent } from './app/about.component';
import { LogoutComponent } from './app/logout/logout.component';
import { OfferComponent } from './app/offer/offer.component';
import { RequestComponent } from './app/request/request.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

const GUIDE_ROUTES: Route[] = [
  { path: 'africa-guide', component: AfricaGuide },
  { path: 'west-guide', component: WestGuide }
]
const CDK_ROUTES: Route[] = [

]
const ALL_ROUTES: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'offer', component: OfferComponent, canActivate: [AuthGuard] },
  { path: 'request', component: RequestComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'public', component: PublicComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'cdk', children: CDK_ROUTES },
  { path: 'guides', children: GUIDE_ROUTES, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'public' }
]
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(ALL_ROUTES);