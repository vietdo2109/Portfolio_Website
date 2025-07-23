import { Component, OnInit } from '@angular/core';
import { ProjectLayoutComponent } from '../components/project-layout/project-layout.component';
import { WhiteTextComponent } from '../components/white-text/white-text.component';
import { GrayTextComponent } from '../components/gray-text/gray-text.component';

@Component({
  selector: 'app-devlife-sim',
  templateUrl: './devlife-sim.component.html',
  styleUrls: ['./devlife-sim.component.scss'],
  imports: [ProjectLayoutComponent, WhiteTextComponent, GrayTextComponent],
})
export class DevlifeSimComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
