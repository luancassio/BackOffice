import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DefaultTemplateComponent } from './layout/components/default-template/default-template.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { LoginTemplateComponent } from './layout/components/login-template/login-template.component';
import { MainComponent } from './layout/components/main/main.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HomeModule } from './modules/home/home.module';
import { UserModule } from './modules/user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgToggleModule } from 'ng-toggle-button';
import { ProfileModule } from './modules/profile/profile.module';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './shared/service/loading.interceptor';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { UserStore } from './core/store/user-store';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    DefaultTemplateComponent,
    LoginTemplateComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    RouterModule,
    HomeModule,
    UserModule,
    DashboardModule,
    ProfileModule,
    SharedModule,
    CoreModule,

    // Libs
    NgToggleModule.forRoot(),
    NgxMaskModule.forRoot(),
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
