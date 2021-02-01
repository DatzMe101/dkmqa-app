import { Component } from '@angular/core';

@Component({
  selector: 'client-home',
  template: `
    <div class="client-home">
      <div class="header">
        <nz-breadcrumb nzSeparator=">">
          <nz-breadcrumb-item>
            <language-label key="home" defaultValue="Home"></language-label
          ></nz-breadcrumb-item>
          <nz-breadcrumb-item>
            <language-label
              key="inspection"
              defaultValue="Inspection"
            ></language-label
          ></nz-breadcrumb-item>
        </nz-breadcrumb>
        <nz-button-group class="navigation-button">
          <button nz-button nzType="primary">
            <i nz-icon nzType="left"></i>
            <language-label key="back" defaultValue="Back"></language-label>
          </button>
          <button nz-button nzType="primary">
            <language-label key="next" defaultValue="Next"></language-label>
            <i nz-icon nzType="right"></i>
          </button>
        </nz-button-group>
      </div>

      <div class="model-container">
        <div class="form">
          <div class="form-item">
            <label for="work-group">
              <language-label
                key="work-group"
                defaultValue="Work Group"
              ></language-label>
            </label>
            <input
              class="form-item-input"
              name="work-group"
              nz-input
              nzSize="small"
            />
          </div>
          <div class="form-item">
            <label for="model">
              <language-label key="model" defaultValue="Model"></language-label
            ></label>
            <input
              class="form-item-input"
              name="model"
              nz-input
              nzSize="small"
              disabled
            />
          </div>
          <div class="form-item">
            <label for="quantity">
              <language-label
                key="quantity"
                defaultValue="Qty"
              ></language-label>
            </label>
            <input
              numeric
              class="form-item-input"
              name="quantity"
              nz-input
              nzSize="small"
            />
          </div>
          <div class="form-item">
            <label for="shift-hour">
              <language-label
                key="shift-hour"
                defaultValue="Shift Hour"
              ></language-label>
            </label>
            <input
              class="form-item-input"
              name="shift-hour"
              nz-input
              nzSize="small"
            />
          </div>
          <div class="form-item">
            <label for="group">
              <language-label key="group" defaultValue="Group"></language-label>
            </label>
            <input
              class="form-item-input"
              name="group"
              nz-input
              nzSize="small"
              disabled
            />
          </div>
          <div class="form-item">
            <label for="line">
              <language-label key="line" defaultValue="Line"></language-label>
            </label>
            <input
              class="form-item-input"
              name="line"
              nz-input
              nzSize="small"
              disabled
            />
          </div>
          <div class="form-item">
            <label for="cell">
              <language-label key="cell" defaultValue="Cell"></language-label>
            </label>
            <input
              class="form-item-input"
              name="cell"
              nz-input
              nzSize="small"
              disabled
            />
          </div>
          <div class="form-item">
            <label for="sequence">
              <language-label
                key="sequence"
                defaultValue="Sequence"
              ></language-label
            ></label>
            <input
              class="form-item-input"
              name="sequence"
              nz-input
              nzSize="small"
              disabled
            />
          </div>
        </div>
        <div class="model-image-container">
          <div class="default-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 512 512"
            >
              <title>ionicons-v5-e</title>
              <rect
                x="48"
                y="80"
                width="416"
                height="352"
                rx="48"
                ry="48"
                style="
                  fill: none;
                  stroke: #000;
                  stroke-linejoin: round;
                  stroke-width: 32px;
                "
              />
              <circle
                cx="336"
                cy="176"
                r="32"
                style="
                  fill: none;
                  stroke: #000;
                  stroke-miterlimit: 10;
                  stroke-width: 32px;
                "
              />
              <path
                d="M304,335.79,213.34,245.3A32,32,0,0,0,169.47,244L48,352"
                style="
                  fill: none;
                  stroke: #000;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 32px;
                "
              />
              <path
                d="M224,432,347.34,308.66a32,32,0,0,1,43.11-2L464,368"
                style="
                  fill: none;
                  stroke: #000;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 32px;
                "
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./client-home.component.scss'],
})
export class ClientHomeComponent {}
