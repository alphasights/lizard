import Ember from 'ember';
import Service from 'lizard/models/service';

export default Ember.Controller.extend({
  services: Ember.computed(function() {
    return [Service.create({ name: 'Pistachio', url: 'https://secure.alphasights.com/health.json' })];
  })
});
