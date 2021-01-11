import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { HotelDataService } from 'src/app/core/hotel-data.service';
import { Hotel } from '../hotel';
@Component({
  selector: 'app-hoteltab',
  templateUrl: './hoteltab.component.html',
  styleUrls: ['./hoteltab.component.css']
})
export class HoteltabComponent implements OnInit,OnDestroy {

  displayedColumns: string[] = ['image','name','price','action'];
  dataSource = new MatTableDataSource<Hotel>();
  hotel: Hotel [] = [];
  Subscriptions = [];
  loading= true;
  constructor(private hotelDataService:HotelDataService) { }
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  ngOnInit() {
    this.Subscriptions.push(
      this.hotelDataService
        .getHotels()
        .subscribe((hotels) => this.onDataLoad(hotels))
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  
  ngOnDestroy() {
    this.Subscriptions.forEach((s) => s.unsubscribe());
  }

   onDataLoad(hotel) {
     this.loading = false;
     this.dataSource.sort = this.sort;
    this.dataSource.data = hotel;
  }
}
