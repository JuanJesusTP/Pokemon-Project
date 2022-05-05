import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'global-app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  minheight: string;
  constructor() { }
  
  ngOnInit(): void {
    let height =  window.outerHeight;
    height = height/2;
    height += 150;
    this.minheight = height.toString() + 'px';
    console.log( this.minheight );
  }

}
