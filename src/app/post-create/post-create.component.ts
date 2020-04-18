import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PostService } from '../services/post.service';
import { Post } from '../services/post.model';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: [
    './post-create.component.css',
    '../../css/color.css',
    '../../css/responsive.css',
    '../../css/style.css',
    '../../css/strip.css',
  ],
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  post: Post;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = 'create';
  private postId: string;

  constructor(
    public postsService: PostService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      content: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });
    // this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //   if (paramMap.has('postId')) {
    //     this.mode = 'edit';
    //     this.postId = paramMap.get('postId');
    //     this.isLoading = true;
    //     this.postsService.getPost(this.postId).subscribe((postData) => {
    //       this.isLoading = false;
    //       this.post = {
    //         id: postData._id,
    //         content: postData.content,
    //         imagePath: postData.imagePath,
    //         creator: postData.creator,
    //         postTime: postData.postTime,
    //       };
    //       this.form.setValue({
    //         content: this.post.content,
    //         image: this.post.imagePath,
    //       });
    //     });
    //   } else {
    //     this.mode = 'create';
    //     this.postId = null;
    //   }
    // });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
        this.postsService.addPost(
        this.form.value.content,
        this.form.value.image
        );
    }
    // else {
    //   this.postsService.updatePost(
    //     this.postId,
    //     this.form.value.content,
    //     this.form.value.image
    //   );
    // }
    
    this.isLoading = false;
    this.form.reset();
  }
}
