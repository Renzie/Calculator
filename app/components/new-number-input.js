import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NewNumberInput extends Component {
  @tracked newNumber;

  @action
  addNewNumber(event) {
    event.preventDefault();

    if (this.newNumber && this.args.onCreate) {
      this.args.onCreate(this.newNumber);

      // reset the message input
      this.newNumber = '';
    }
  }
}
