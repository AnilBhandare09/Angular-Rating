import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UiMaterialComponents } from '../ui-material-components';
import { RatingComponent } from './rating.component';
import { PipeModule } from '../pipes/pipes.module';



const components = [
    RatingComponent
];

const modules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiMaterialComponents,
    FormlyMaterialModule,
    FormlyModule,
    FlexLayoutModule,
    PipeModule
];

@NgModule({
    declarations: components,
    entryComponents: components,
    imports: modules,
    exports: [modules, components]
})

export class RatingModule {

}
