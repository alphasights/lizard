import DS from 'ember-data';

var ServiceStatusUpdate = DS.Model.extend({
  created_at: DS.attr('date'),
  status: DS.attr('string'),
  service: DS.belongsTo('service')
});

ServiceStatusUpdate.reopenClass({
  FIXTURES: []
});

export default ServiceStatusUpdate;
