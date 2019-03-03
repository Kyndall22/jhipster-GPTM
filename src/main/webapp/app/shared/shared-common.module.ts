import { NgModule } from '@angular/core';

import { GptmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GptmSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GptmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GptmSharedCommonModule {}
