import { ProfileService } from './../edit-profile/profile.service';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { Router } from '@angular/router';
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

  constructor(private router: Router, private authService:AuthService, private profileService:ProfileService) { }
  onLogout(event){
    event.preventDefault(); // Prevents browser following the link
    this.authService.logout();
}

onEditProfile(event){
  event.preventDefault(); // Prevents browser following the link
  this.router.navigate(["/edit-profile"]);
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
