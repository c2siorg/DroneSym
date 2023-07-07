import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { MaterializeModule  } from 'angular2-materialize';
import { HttpModule } from '@angular/http';
import { AuthHttpService } from './auth-http/auth-http.service';
import { RouterModule, Routes} from '@angular/router';
import { AppRouter } from './app-router';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { DroneDataService } from './drone-service/drone-data.service';
import { UserService } from './user-service/user.service';
import { RouteGuardService } from './route-guard/route-guard.service';
import { AdminAuthorizeService } from './admin-authorize/admin-authorize.service';
import { CursorTooltipComponent } from './cursor-tooltip/cursor-tooltip.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DroneOptionBoxComponent } from './drone-option-box/drone-option-box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DroneGroupsComponent } from './drone-groups/drone-groups.component';
import { DroneListComponent } from './drone-list/drone-list.component';
import { DronesBoxComponent } from './drones-box/drones-box.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SignupComponent } from './signup/signup.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetCodeDialogComponent } from './reset-code-dialog/reset-code-dialog.component';
import { NewPasswordDialogComponent } from './new-password-dialog/new-password-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    CursorTooltipComponent,
    ConfirmDialogComponent,
    DroneOptionBoxComponent,
    DashboardComponent,
    LoginComponent,
    UserSignupComponent,
    UserViewComponent,
    UserDashboardComponent,
    DroneGroupsComponent,
    DroneListComponent,
    DronesBoxComponent,
    UserManagementComponent,
    SignupComponent,
    BreadcrumbComponent,
    ForgotPasswordComponent,
    ResetCodeDialogComponent,
    NewPasswordDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsApiKey
    }),
    AppRouter,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    DroneDataService,
    UserService,
    AuthHttpService,
    RouteGuardService,
    AdminAuthorizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
