import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'app-error-msg',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @if (error()) {
      <div class="alert alert-error my-3">
        {{ error() }}
      </div>
    }
  `,
  styles: ``
})
export class ErrorMsgComponent {
  error = input.required<string | null>()
}
