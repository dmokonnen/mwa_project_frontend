import { AuthInterceptor } from './auth/auth-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopbarComponent } from './topbar/topbar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { CenterlayoutComponent } from './centerlayout/centerlayout.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { LoginComponent } from './auth/login_singup/login.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
=======
import { LogoutComponent } from './logout/logout.component';
>>>>>>> d01afcebb770babaebdb7231f6821969396aa587

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LeftsidebarComponent,
    RightsidebarComponent,
    CenterlayoutComponent,
    PostCreateComponent,
    PostListComponent,
    CommentsComponent,
    HomeComponent,
<<<<<<< HEAD
    LoginComponent
=======
    LogoutComponent
>>>>>>> d01afcebb770babaebdb7231f6821969396aa587
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
