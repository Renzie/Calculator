import Component from '@glimmer/component';
import { A } from '@ember/array'
import { sum } from '@ember/object/computed';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NumbersComponent extends Component {
  numbers = A([1,2,3, 4]);
  @sum('numbers') total;
  @tracked bg;

  @action
  addNumber(number) {
    this.numbers.pushObject(parseInt(number));
    this.changeColor();
    this.checkIfAboveAmount(100);
  }

  changeColor() {
    this.bg = this.total % 2 == 0 ? this.bg = 'green' : this.bg = 'red'
  }

  checkIfAboveAmount(amount){
    if (this.total > amount) {
      window.alert("heads up!")
    }
  }

  @action
  removeNumber(number) {
    this.numbers.removeObject(this.numbers.objectAt(number));
      this.changeColor();
      this.checkIfAboveAmount(100);
  }

  @action
  reset() {
    this.numbers.clear();
      this.changeColor();
  }
}
