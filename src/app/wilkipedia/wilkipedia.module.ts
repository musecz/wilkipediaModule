import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JsonpModule} from '@angular/http';

import {WilkipediaService} from './wilkipedia.service';


import {WilkipediaResultComponent} from './wilkipedia-result/wilkipedia-result.component';
import {WilkipediaSearchComponent} from './wilkipedia-search/wilkipedia-search.component';
import {WilkipediaComponent} from './wilkipedia.component';

import {WilkipediaRoutingModule} from './wilkipedia-routing.module';


@NgModule({
    imports: [
        WilkipediaRoutingModule,
        CommonModule,
        JsonpModule
    ],
    declarations: [
        WilkipediaComponent,
        WilkipediaSearchComponent,
        WilkipediaResultComponent
    ],
    providers: [
        WilkipediaService,
    ],
    exports: []
})
export class WilkipediaModule {
}
