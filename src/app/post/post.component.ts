import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  userPost$: Object;

  constructor(private data: DataService) { 
    // this.route.params.subscribe(params => this.userPost$ = params.id)
  }

  ngOnInit() {
    this.data.getPost().subscribe(
      data => this.userPost$ = data
    )
  }

}
