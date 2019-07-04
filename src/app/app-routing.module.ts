import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { RegistroComponent } from "./auth/registro/registro.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { dashboardRoutes } from "./dashboard/dashboard.routes";
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "", component: DashboardComponent, children: dashboardRoutes, canActivate: [ AuthGuardService ] },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
