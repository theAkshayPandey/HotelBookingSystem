import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'/home'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
     path: 'auth',
     loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'booking',
    component:BookingComponent
  },
  {
    path: 'rooms',
    component:RoomsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
