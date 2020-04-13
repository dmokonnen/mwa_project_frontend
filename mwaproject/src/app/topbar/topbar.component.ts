import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css', '../../css/color.css',
    '../../css/responsive.css', '../../css/style.css',
    '../../css/strip.css']
})
export class TopbarComponent implements OnInit {

  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(private authService:AuthService) { }
  onLogout(event){
    event.preventDefault(); // Prevents browser following the link
    this.authService.logout();
}
ngOnInit(): void {

  this.userIsAuthenticated = this.authService.getIsAuth();
  this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
}


ngOnDestroy() {
  this.authListenerSubs.unsubscribe();
}

}
