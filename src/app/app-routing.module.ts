import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { ListhotelComponent } from './listhotel/listhotel.component';


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
    path: 'hotels',
    component:ListhotelComponent
  },
  {
    path: 'viewRooms',
    loadChildren: () => import('./hotel/hotel.module').then(m=>m.HotelModule)
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
