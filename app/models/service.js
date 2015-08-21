import Ember from 'ember';
import { raw } from 'ic-ajax';

const DELAY = 10000;

export default Ember.Object.extend({
  init: function() {
    this._super.apply(this, arguments);

    setTimeout(() => {
      Ember.run(this._updateStatus.bind(this));
    }, DELAY)
  },

  name: null,
  url: null,
  status: 'up',

  _updateStatus: function() {
    raw(this.get('url')).then((result) => {
      if (result.response['app'] === 'ok') {
        this.set('status', 'up');
      } else {
        this.set('status', 'down');
      }
    }, (result) => {
      if (result.textStatus === 'error') {
        this.set('status', 'down');
      } else if (result.textStatus === 'timeout') {
        this.set('status', 'timeOut');
      }
    }).finally(() => {
      setTimeout(() => {
        Ember.run(this._updateStatus.bind(this));
      }, DELAY)
    });
  }
});
