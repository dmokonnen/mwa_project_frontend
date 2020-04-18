import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PostService } from '../services/post.service';
import { Post } from '../services/post.model';
declare var $: any;

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: [
    "./comments.component.css",
    "../../css/color.css",
    "../../css/responsive.css",
    "../../css/style.css",
    "../../css/strip.css",
  ],
})
export class CommentsComponent implements OnInit {
  @Input('postId') postId: string;
  @ViewChild('pid', { read: ElementRef }) pid: ElementRef;
  post: Post;
  isLoading = false;
  form: FormGroup;
  postid: string;
  content: string;

  constructor(public postsService: PostService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.form = new FormGroup({
      content: new FormControl(null, { validators: [Validators.required] }),
      postId: new FormControl(null, { validators: [Validators.required] })
    });
  }
  onEnter() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    console.log(this.form.value.content);
    console.log(this.form.value.postId);
    console.log(this.postid);
    this.postsService.addComment(this.form.value.content, this.form.value.postId);
    this.isLoading = false;
    this.form.reset();
  }
  updateId(input: string) {
    this.postid = input;
  }
}
