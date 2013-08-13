App = Em.Application.create({
  rootElement: '#ember-app'
});
App.deferReadiness();

App.IndexController = Em.ArrayController.extend({
  numCheckbox: 100,

  renderCheckbox: function() {
    var numCheckbox = this.get('numCheckbox');
    var checkboxes = new Array(numCheckbox);

    for (var i=0; i < numCheckbox; i++) {
      checkboxes[i] = {};
    }
    this.pushObjects(checkboxes);
  }
});

App.advanceReadiness();
