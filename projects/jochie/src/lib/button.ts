import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

@Component({
  selector: 'jochie-button',
  imports: [],
  template: `
    <button [type]="type()" [disabled]="disabled()" (click)="handleClick()">
      <ng-content />
    </button>
  `,
  styles: `
    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      background-color: #6200ee;
      color: #fff;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover:not(:disabled) {
        background-color: #3700b3;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:focus-visible {
        outline: 2px solid #6200ee;
        outline-offset: 2px;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JochieButton {
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input(false);
  clicked = output<void>();

  handleClick() {
    if (!this.disabled()) {
      this.clicked.emit();
    }
  }
}
