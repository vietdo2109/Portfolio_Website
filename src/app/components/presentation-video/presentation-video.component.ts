import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-video',
  templateUrl: './presentation-video.component.html',
  styleUrls: ['./presentation-video.component.css'],
})
export class PresentationVideoComponent implements OnInit {
  videoSrc = input();
  constructor() {}

  ngOnInit() {}
}
