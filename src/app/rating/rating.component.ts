import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges, forwardRef, Renderer2, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _ from 'underscore';
import { SortedIndex } from '../util/SupportUtil';

const customValueProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RatingComponent),
  multi: true
};

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [customValueProvider]
})
export class RatingComponent implements OnInit, ControlValueAccessor {

  indxValue: number = null;
  _value: number;
  propagateChange: any = () => { };
  @Input() ratingObject: any;
  @Input() max = 25;
  @Input() min = 5;
  @Input() step = 5;
  @Input() type = 'star';;
  @Input() title;
  @Input() color = ['green'];
  @Input() input = false;
  @Input() format;
  @Input() theme;
  @Output() rateChange = new EventEmitter<number>(true);
  items: number[] = [];
  rateColor: String
  titleArray: String[] = [];

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) { }

  ngOnInit() {
    this.type = !this.type ? 'star' : this.type;
    this.max = !this.max ? 25 : this.max;
    this.min = !this.min ? 5 : this.min;
    this.step = !this.step ? 5 : this.step;
    this.color = !this.color || !this.color.length ? ['green'] : this.color;
    this.createRating();
    this.getTitle(this.title);
  }

  

  writeValue(value: any) {
    this.getRateColor(value)
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void { }

  createRating() {
    if (this.min < this.max) {
      for (let i = this.min; i <= this.max; i += this.step) {
        this.items.push(i);
      }
    }
    else {
      for (let i = this.min; i >= this.max; i -= this.step) {
        this.items.push(i);
      }
    }
  }

  getTitle(...title) {
    this.title = _.isArray(this.title) ? this.title : title;
    this.titleArray = [];
    let prev = 0;
    let titleCount = (this.items.length / this.title.length);
    for (let i = 0; i < this.items.length; i++) {
      let nextCount = Math.round(titleCount * (i + 1)) - prev;
      for (let j = 0; j < nextCount; j++) {
        this.titleArray.length <= this.items.length ? this.titleArray.push(this.title[i]) : '';
      }
      prev = prev + nextCount;
    }
  }

  getRateColor(value: any) {
    if (value != undefined) {
      this._value = value;
      this.indxValue = this.format ? Math.round(((value * this.items.length) / 100) - 1) : _.indexOf(this.items, SortedIndex(this.items, this._value));
      this.indxValue >= this.items.length ? this.indxValue = this.items.length - 1 : '';
      let percentage = (this.indxValue / this.items.length);
      let indexColor = Math.floor(this.color.length * percentage);
      this.rateColor = this.color[indexColor]
    }
  }

  update(event, id) {
    let indx = this.items.indexOf(id);
    let rateValue = this.format ? ((indx + 1) / this.items.length) * 100 : id;
    this.rateChange.emit(rateValue);
  }
}

export function ColorChange(color1, color2, steps) {
  let stepFactor = 1 / (steps - 1),
      interpolatedColorArray = [];
  color1 = checkRgb(color1).match(/\d+/g).map(Number);    // checkRgb: convert hex color to rgb
  color2 = checkRgb(color2).match(/\d+/g).map(Number);
  for (var i = 0; i < steps; i++) {
    interpolatedColorArray.push(InterpolateColor(color1, color2, stepFactor * i));
  }
  return interpolatedColorArray;
}

export function InterpolateColor(color1, color2, factor) {
  if (arguments.length < 3) {
    factor = 0.5;
  }
  var result = color1.slice();
  for (var i = 0; i < 3; i++) {
    result[i] = Math.floor(result[i] + factor * (color2[i] - color1[i]));
  }
  return 'rgb(' + result.toString() + ')';
};

export function checkRgb (color) {
  var rxValidRgb = /([R][G][B][A]?[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i
  if (rxValidRgb.test(color)) {
    return color
  }else{
      if (color[0] === '#') color = color.substr(1);   
      var r = parseInt(color.slice(0,2), 16),
          g = parseInt(color.slice(2,4), 16),
          b = parseInt(color.slice(4,6), 16);
      return 'rgb('+ r +','+ g +','+ b +')';
  }
}

export interface RatingFieldConfig {
  type?: String,
  value: Number,
  min?: Number,
  max?: Number,
  step?: Number,
  title?: any,
  input?: Boolean,
  color?: any,
  format?: String,
  theme?: String
}

