import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from "@angular/forms"
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { InterceptHttpInterceptor } from './intercept-http.interceptor';

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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
