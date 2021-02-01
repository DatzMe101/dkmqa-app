import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <nz-layout class="app-admin">
      <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" [nzTrigger]="null">
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="inline">
          <li nz-menu-item>
            <i nz-icon nzType="dashboard"></i>
            <span>Dashboard</span>
          </li>
        </ul>
      </nz-sider>
      <nz-layout>
        <nz-header>
          <div class="trigger-container">
            <i
              class="trigger"
              nz-icon
              [nzType]="isCollapsed ? 'menu-unfold' : 'menu-fold'"
              (click)="isCollapsed = !isCollapsed"
            ></i>
          </div>
        </nz-header>
        <nz-content>
          <router-outlet></router-outlet>
        </nz-content>
      </nz-layout>
    </nz-layout>
  `,
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  isCollapsed = false;
}
