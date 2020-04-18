import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../services/post.model';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css',
    '../../css/color.css',
    '../../css/responsive.css',
    '../../css/style.css',
    '../../css/strip.css',
  ]
})
export class PostDetailComponent implements OnInit {
  // @Input("post") post: Post;
  @Input("postTime") postTime: Date;
  @Input("likedBy") likedBy: any;
  @Input("creator") creator: any;
  @Input("content") content: string;
  @Input("imagePath") imagePath: string;
  constructor() { }


  ngOnInit(): void {
  }

}
