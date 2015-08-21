import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'lizard/tests/helpers/start-app';

module('Acceptance | services', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Display list of services with corresponding statuses', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.services ul li').text().trim(), 'Pistachio: up');
  });
});
