import { AuthService } from './../auth/auth.service';
import { ProfileService } from './profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { DatePipe, JsonPipe } from '@angular/common';
import { UserProfile } from './user-data.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css', '../../css/color.css',
    '../../css/responsive.css', '../../css/style.css',
    '../../css/strip.css']
})
export class EditProfileComponent implements OnInit {



userProfile: UserProfile;
editForm: FormGroup;

constructor( private formBuilder: FormBuilder, private router: Router, private authService:AuthService, private profileService:ProfileService) {  }
 

get address() {
    return (this.editForm.get('address') as FormArray).controls;
  }

  getControls() {
    return (this.editForm.get('address') as FormArray).controls;
  }

ngOnInit() : void {
    let userId = window.localStorage.getItem("userId");
     // let userId = this.authService.getUserId();
    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['login']);
      return;
    }
    this.editForm = this.formBuilder.group({
      _id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      address:this.formBuilder.array([
          this.formBuilder.group({
              
                country:[''],
                state:[''],
                city:[''],
                zipCode:['']
      })
      ])
    });
  
    this.profileService.getUserById(userId)
      .subscribe(data => {
        console.log("inside profile the user id is: " + data);
        delete data.result.followers;
        delete data.result.following;
        delete data.result.userName;
        delete data.result.birthDate;
        delete data.result.password;
        delete data.result.accountStatus;
        delete data.result.isAdmin;
        delete data.result.unhealthyPostNo;

        this.editForm.setValue(data.result);
      });
  }

  onUpdate(){
    // if(this.editForm.invalid)
    // return; 
    console.log("UPDATE STARTED: INDIDE COMPONENT"); 
    this.profileService.updateUser(this.editForm.value);
 
  }
  onCancel(){

  }
}
