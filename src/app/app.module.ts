import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from "@angular/forms"
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { ApiInterceptorService } from './api-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
