App.Router.map(function() {
  this.route('aboutMe', {path: '/aboutme'});
  this.route('resume', {path: '/resume'});

  this.resource('projects', function(){
    this.route('show', {path: '/:project_id'});
  });
});
