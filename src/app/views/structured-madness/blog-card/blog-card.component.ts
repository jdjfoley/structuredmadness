import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jdevsm-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
	@Input('title') title: string;
	@Input('date') date: string;
	@Input('tags') tags: string;

  constructor() { }

  ngOnInit() {
  }

}
