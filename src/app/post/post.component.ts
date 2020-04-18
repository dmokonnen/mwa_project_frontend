import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../services/post.model';
@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ['./post.component.css',
    '../../css/color.css',
    '../../css/responsive.css',
    '../../css/style.css',
    '../../css/strip.css']
})
export class PostComponent implements OnInit {
  @Input("postId") postId: string;
  @Input("postTime") postTime: Date;
  @Input("comments") comments: any;
  @Input("likedBy") likedBy: any;
  @Input("creator") creator: string;
  @Input("content") content: string;
  @Input("imagePath") imagePath: string;
  // @Input("post") post: Post;
  constructor() {}

  ngOnInit(): void {}
}
