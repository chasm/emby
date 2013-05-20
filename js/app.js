App = Ember.Application.create();

App.Router.map(function() {
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
  this.resource('about');
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return App.Post.find();
  }
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  intro: DS.attr('string'),
  extended: DS.attr('string'),
  publishedAt: DS.attr('date')
});

App.Post.FIXTURES = [
  {
    id: 1,
    title: "My first post",
    author: "joe",
    publishedAt: new Date('12-27-2012'),
    intro: "There are some cool things in this post. You just don't know!",
    extended: "Duis mi orci, posuere id euismod nec, dignissim ut lorem. Nam eu sollicitudin eros. Donec vitae felis sem, vitae laoreet nisl. Pellentesque eget lorem quis lacus euismod sodales vitae at felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris a leo non quam scelerisque molestie. In feugiat luctus nisi, at lacinia dui sollicitudin pretium."
  },
  {
    id: 2,
    title: "My other post",
    author: "joe",
    publishedAt: new Date('12-31-2012'),
    intro: "This post is even better. It got the shizzle for the fizzle. Word up.",
    extended: "Pellentesque eget lorem quis lacus euismod sodales vitae at felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris a leo non quam scelerisque molestie. In feugiat luctus nisi, at lacinia dui sollicitudin pretium. Sed tempor nisl vitae odio interdum ultricies. Vivamus tortor magna, pulvinar nec mattis sit amet, dignissim in felis. Vestibulum et iaculis lorem."
  }
];

Ember.Handlebars.registerBoundHelper('date', function(date) {
  return moment(date).fromNow();
});