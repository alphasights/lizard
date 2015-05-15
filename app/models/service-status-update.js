import DS from 'ember-data';
import Ember from 'ember';

var ServiceStatusUpdate = DS.Model.extend({
  created_at: DS.attr('date'),
  status: DS.attr('string')
});

ServiceStatusUpdate.reopenClass({
  FIXTURES: []
});

export default ServiceStatusUpdate;
