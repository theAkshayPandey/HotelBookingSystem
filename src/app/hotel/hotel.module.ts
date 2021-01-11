import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { SimpleComponent } from './simple/simple.component';
import { LuxuryComponent } from './luxury/luxury.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RoomsComponent,SimpleComponent,LuxuryComponent],
  imports: [
    CommonModule,
    HotelRoutingModule,
    SharedModule
  ],
  exports: [
    RoomsComponent,
    SimpleComponent,
    LuxuryComponent
  ]
})
export class HotelModule { }
