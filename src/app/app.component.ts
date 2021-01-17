import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './core/auth.service';
import { User } from './core/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelBookingSystem';

  user: User;
  userSubscription: Subscription;
  
  constructor(private authService: AuthService,
    private router: Router) {
    
    this.authService.findMe().subscribe((user) => {
      this.user = user;
      console.log(user);
    });

    this.userSubscription = this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
