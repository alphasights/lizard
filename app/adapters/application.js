import Firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';
import DS from 'ember-data';

var adapter;

if (EmberENV.firebase != null) {
  adapter = FirebaseAdapter.extend({
    firebase: new Firebase(EmberENV.firebase)
  });
} else {
  adapter = DS.FixtureAdapter.extend({
    queryFixtures: function(fixtures) {
      return fixtures;
    }
  });
}

export default adapter;
