import DS from 'ember-data';

var Service = DS.Model.extend({
  name: DS.attr('string'),
  serviceStatuUpdates: DS.hasMany('serviceStatusUpdate', { async: true })
});

Service.reopenClass({
  FIXTURES: []
});

export default Service;
