import { Component, OnInit } from '@angular/core';
import { RatingFieldConfig, ColorChange } from './rating/rating.component';
// import { RatingModule } from './rating/rating.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rating: RatingFieldConfig;
  ratingNumber: RatingFieldConfig;
  ratingNumberMinus: RatingFieldConfig;
  ratingDrop: RatingFieldConfig;
  ratingThumsUp: RatingFieldConfig;
  ratingThumsDown: RatingFieldConfig;

  ngOnInit(): void {

    this.rating = {
      type: 'star',
      value: 20,
      min: 10,
      max: 50,
      step: 10,
      title: 'Start Rating',
      input: true,
      color: ['#ff0000', '#ffa500', '#008000'],
      theme: 'icon-block'
    };
    this.ratingThumsUp = {
      type: 'thumb_up',
      value: 30,
      min: 10,
      max: 100,
      step: 10,
      input: true,
      color: ['#ff0000', '#ffa500', '#ffd280', '#008000'],
      theme: 'icon-block'
    };
    this.ratingThumsDown = {
      type: 'thumb_down',
      value: 20,
      min: 10,
      max: 100,
      step: 10,
      input: true,
      // color: ['#008000', '#ffd280', '#ffa500', '#ff0000'],
      color: this.getRateColor('rgb(0, 224, 27)', 'rgb(255, 0, 0)', 5),
      theme: 'icon-block'
    };

    this.ratingNumber = {
      type: 'number',
      value: 60,
      min: 10,
      max: 100,
      step: 10,
      input: true,
      color: ['#ff0000', '#ffa500', '#ffd280', '#008000'],
      title: ['Bad', 'OK', 'Good', 'Super', 'Awesome'],
      format: 'percentage',
      theme: 'number-block'
    };

    this.ratingDrop = {
      type: 'dropdown',
      value: 3,
      min: 1,
      max: 5,
      title: ['Bad', 'OK', 'Good', 'Super', 'Awesome'],
      input: true,
      theme: 'number-block'
    };
  }

  getRateColor(...event) {
    if (Number.isInteger(event[2])) {
      return ColorChange(event[0], event[1], event[2]);
    } else {
      return event;
    }
  }

  onFaoRate($event) {
    this.rating.value = $event;
  }

  onThumsUp($event) {
    this.ratingThumsUp.value = $event;
  }
  onThumsDown($event) {
    this.ratingThumsDown.value = $event;
  }
  onRatingNumber($event) {
    this.ratingNumber.value = $event;
  }
  onRatingNumberMinus($event) {
    this.ratingNumberMinus.value = $event;
  }
  onRatingDrop($event) {
    this.ratingDrop.value = $event;
  }
}