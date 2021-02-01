import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  template: `
    <div class="app-client">
      <div class="header">
        <client-header></client-header>
      </div>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
      <div class="message-alert">
        <i
          class="alert-icon"
          nz-icon
          nzType="info-circle"
          nzTheme="outline"
        ></i>
        <language-message
          key="login-notification"
          defaultValue="You are using
          English as system language."
        ></language-message>
      </div>
    </div>
  `,
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {}
