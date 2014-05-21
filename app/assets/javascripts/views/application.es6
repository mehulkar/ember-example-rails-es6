export default Ember.View.extend({
  template: Em.Handlebars.compile('Hello world'),

  didInsertElement: function() {
    console.log('inserting element into body!');
  }
})