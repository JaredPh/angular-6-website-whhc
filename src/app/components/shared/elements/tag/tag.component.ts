import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'whhc-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() tag: string;
  @Input() size: string;

  public tagName: string;
  public firstUrlChild: string;

  constructor(
    private route: Router,
  ) {}

  ngOnInit() {
    this.firstUrlChild = this.route.url.match(/^\/[^\/]+/)[0];
    this.tagName = this.tag.replace('-', ' ');
  }

}
