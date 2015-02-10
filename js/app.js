App = Ember.Application.create();

App.Router.map(function() {
  this.route('aboutMe', {path: '/aboutme'});
  this.route('portfolio', {path: '/portfolio'});
  this.route('resume', {path: '/resume'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['YOUR PAGE', 'yellow', 'blue'];
  }
});
