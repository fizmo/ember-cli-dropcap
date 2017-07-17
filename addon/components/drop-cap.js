import Ember from 'ember';
import Dropcap from 'dropcap';

export default Ember.Component.extend({
  tagName: 'span',

  didRender() {
    this._super(...arguments);
    Dropcap.layout(this.$()[0], this.get('heightInLines'), this.get('baselinePos'));
  }
});
