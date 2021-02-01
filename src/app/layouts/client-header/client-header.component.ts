import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'client-header',
  template: `
    <header class="app-header">
      <div class="app-header__branding">
        <img class="app-header__logo" src="./assets/images/logo.png" />
      </div>
      <div class="app-header__detail">
        <div class="small-detail-container">
          <div class="small-detail">BP - 100</div>
          <div class="small-detail">Shift1</div>
        </div>
        <div>
          <div class="app-title">DKM QA TOOL</div>
          <div class="app-sub-title">Home Page</div>
        </div>
        <div class="small-detail-container">
          <div class="small-detail">Assembly</div>
          <div class="small-detail">Special Group</div>
        </div>
      </div>
      <div class="app-nav">
        <div>
          <i class="icon-home" nz-icon nzType="home" nzTheme="outline"></i>
        </div>
        <div (click)="onLogout()">
          <img class="app-header__logout" src="./assets/images/logout.png" />
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./client-header.component.scss'],
})
export class ClientHeaderComponent {
  constructor(private router: Router) {}

  onLogout() {
    this.router.navigate(['/login']);
  }
}
