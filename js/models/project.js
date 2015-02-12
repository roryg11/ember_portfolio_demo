App.Project = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  features: DS.attr('string'),
  imageUrl: DS.attr('string')
});

App.Project.FIXTURES = [
  {
    id: 1,
    name: "PuppyLove",
    description: "A web app connecting dogs to other playmates",
    features: "Messaging, parks near you, user accounts, matching and searching for dogs",
    imageUrl: "http://38.media.tumblr.com/tumblr_m5gkhokzwB1qb9pa3o1_500.gif"
  },
  {
    id:2,
    name: "gCamp",
    description: "A project management application",
    features: "Connects users with projects and todo lists",
    imageUrl: ""
  }
];
