import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ConentComponent } from './contents/conent/conent.component';
import { LoginComponent } from './pages/login/login.component';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { PersanalComponent } from './contents/persanal/persanal.component';
import { AddComponent } from './contents/persanal/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ConentComponent,
    LoginComponent,
    PersanalComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: 'TOKENNAME', useValue: environment.tokenname },
    { provide: 'API', useValue: environment.api },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
