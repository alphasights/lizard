import Ember from 'ember';
import { request } from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {
    return request('https://secure.alphasights.com/health.json').then(function(response) {
      return JSON.stringify(response);
    });
  }
});
