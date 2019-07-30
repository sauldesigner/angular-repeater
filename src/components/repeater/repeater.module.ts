import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepeaterComponent } from './repeater.component';

@NgModule({
    declarations: [RepeaterComponent],
    exports: [RepeaterComponent],
    imports: [CommonModule]
})
export class RepeaterModule {
}