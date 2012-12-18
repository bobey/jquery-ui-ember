jquery-ui-ember
===============
An Ember mixin used to convert jQuery UI widgets to the Ember way.

JQ.Button usage
---------------------

~~~
// Create a subclass of `JQ.Button` to define behavior for our button.
App.Button = JQ.Button.extend({

  // Native event handler
  click: function() {
    // Disable the button.
    this.set('disabled', true);
  },

  // jQuery UI event handler
  jQueryUICreate: function(event, ui) {
    console.log('button created');
  }
});
~~~
