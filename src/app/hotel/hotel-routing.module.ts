import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LuxuryComponent } from './luxury/luxury.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SimpleComponent } from './simple/simple.component';


const routes: Routes = [
  {
    path: '',
    component:RoomsComponent
  },
  {
    path: 'superior',
    component:SimpleComponent
  },
  {
    path: 'suites',
    component:LuxuryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
