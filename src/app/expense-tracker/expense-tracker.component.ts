import { Component, OnInit } from '@angular/core';
import { ProjectLayoutComponent } from '../components/project-layout/project-layout.component';
import { WhiteTextComponent } from '../components/white-text/white-text.component';
import { NavigateButtonComponent } from '../components/navigate-button/navigate-button.component';
import { GrayTextComponent } from '../components/gray-text/gray-text.component';
@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.scss'],
  imports: [
    ProjectLayoutComponent,
    WhiteTextComponent,
    NavigateButtonComponent,
    GrayTextComponent,
  ],
})
export class ExpenseTrackerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
