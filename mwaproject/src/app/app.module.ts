import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopbarComponent } from './topbar/topbar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { CenterlayoutComponent } from './centerlayout/centerlayout.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LeftsidebarComponent,
    RightsidebarComponent,
    CenterlayoutComponent,
    PostCreateComponent,
    PostListComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
