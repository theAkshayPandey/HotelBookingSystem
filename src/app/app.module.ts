import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from "src/app/auth/auth.module";
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { HotelModule } from './hotel/hotel.module';
import { ListhotelComponent } from './listhotel/listhotel.component';
import { SideNavComponent } from './listhotel/side-nav/side-nav.component';
import { HoteltabComponent } from './listhotel/hoteltab/hoteltab.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderInterceptorService } from './core/auth-header-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    ListhotelComponent,
    SideNavComponent,
    HoteltabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    HotelModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptorService,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
