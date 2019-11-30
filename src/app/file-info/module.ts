import { NgModule } from '@angular/core';

import { FileInfoComponent } from './file-info.component';

@NgModule({
    imports: [],
    exports: [FileInfoComponent],
    declarations: [FileInfoComponent],
    providers: [],
})
export class FileInfoModule {
    static traverserViews = [
        {name: 'info', components: {file: FileInfoComponent}},
    ];
}
