import { Component, OnInit } from '@angular/core';
import { ProjectLayoutComponent } from '../components/project-layout/project-layout.component';
import { WhiteTextComponent } from '../components/white-text/white-text.component';
import { GrayTextComponent } from '../components/gray-text/gray-text.component';
import { NavigateButtonComponent } from '../components/navigate-button/navigate-button.component';
import { PresentationImageComponent } from '../components/presentation-image/presentation-image.component';
import { PresentationVideoComponent } from '../components/presentation-video/presentation-video.component';

@Component({
  selector: 'app-random-webtoon',
  templateUrl: './random-webtoon.component.html',
  styleUrls: ['./random-webtoon.component.scss'],
  imports: [
    ProjectLayoutComponent,
    WhiteTextComponent,
    GrayTextComponent,
    NavigateButtonComponent,
    PresentationImageComponent,
    PresentationVideoComponent,
  ],
})
export class RandomWebtoonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
