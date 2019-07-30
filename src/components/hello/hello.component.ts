import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<p>Hello {{name}}!</p>`,
  styles: [`p { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
