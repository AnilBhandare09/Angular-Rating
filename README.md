# RatingComponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Rating  options (inputs):

[ngModel]: Current rating.

[type]: Type of rating that can be dropdown,number and any Mat Icon name ex thumb_up or thumb_down, default star 

[max]: Maximal rating that can be given using this widget, default 5

[min]: Minimum rating that can be given using this widget, default 1

[input]: Allow user to give rating(editable) otherwise it will be read only. default false

[theme]: Theme class.theme number-block for number rating and icon-block for icon.

[step]: step class.step that can be range of min and max.

[title]: Titles array. array length should be equal to the max value, each index represents the rating title, default [].

[format]: A format indicating if rating is in percentage then format is percentage, default is value.

(rateChange): An event fired when a user selects a new rating.


## Thumbs Icon rating example:

<app-rating [(ngModel)]="ratingThumsUp.value" [theme]="ratingThumsUp.theme" [title]="ratingThumsUp.title" [color]="ratingThumsUp.color" [type]="ratingThumsUp.type" [max]="ratingThumsUp.max" (rateChange)="onThumsUp($event)" [min]="ratingThumsUp.min" [step]="ratingThumsUp.step" [input]="ratingThumsUp.input"></app-rating>

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
