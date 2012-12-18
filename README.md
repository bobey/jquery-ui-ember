jquery-ui-ember
===============
An Ember mixin used to convert jQuery UI widgets to the Ember way.

Usage
-----

~~~
// Create a subclass of `JQ.Button` to define behavior for our button.
App.Button = JQ.Button.extend({
  // When the button is clicked...
  click: function() {
    // Disable the button.
    this.set('disabled', true);
  }
});
~~~
