App = Ember.Application.create();

App.setupForTesting();
App.injectTestHelpers();

// Globalize the methods from Ember-Qunit:
emq.globalize();