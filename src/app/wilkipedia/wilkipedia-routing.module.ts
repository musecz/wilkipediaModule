import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WilkipediaSearchComponent} from './wilkipedia-search/wilkipedia-search.component';
import {WilkipediaResultComponent} from './wilkipedia-result/wilkipedia-result.component';
import {WilkipediaComponent} from './wilkipedia.component';


const wilkipediaRoutes: Routes = [
    {
        path: '',
        component: WilkipediaComponent,
        children: [
            {
                path: '',
                component: WilkipediaSearchComponent,
                children: [
                    {
                        path: '',
                        component: WilkipediaResultComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(wilkipediaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class WilkipediaRoutingModule {
}



