import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopbarComponent } from './topbar/topbar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { CenterlayoutComponent } from './centerlayout/centerlayout.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login_singup/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';

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
    LoginComponent,
    EditProfileComponent

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
