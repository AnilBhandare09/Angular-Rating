import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating.component';
import { UiMaterialComponents } from './ui-material-components';



const components = [
    RatingComponent
];

const modules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiMaterialComponents,
];

@NgModule({
    declarations: components,
    entryComponents: components,
    imports: modules,
    exports: [modules, components]
})

export class RatingModule {

}
