window.App = Em.Application.create();
App.initialize();

var JQ = window.JQ;

// Create a simple controller to hold values that will be shared across
// views.
App.controller = Em.Object.create({
  progress: 0,
  menuDisabled: true,
  people: []
});

// Create a subclass of `JQ.Button` to define behavior for our button.
App.Button = JQ.Button.extend({
  // When the button is clicked...
  click: function() {
    // Disable the button.
    this.set('disabled', true);

    // Increment the progress bar.
    this.increment();
  },

  increment: function() {
    var self = this;

    // Get the current progress value from the controller.
    var val = App.controller.get('progress');

    if(val < 100) {
      // If the value is less than 100, increment it.
      App.controller.set('progress', val + 1);

      // Schedule another increment call from 30ms.
      setTimeout(function() { self.increment() }, 30);
    }
  }
});

// Create a subclass of `JQ.ProgressBar` to define behavior for our
// progress bar.
App.ProgressBar = JQ.ProgressBar.extend({
  // When the jQuery UI progress bar reaches 100%, it will invoke the
  // `complete` event. Recall that JQ.Widget registers a callback for
  // the `complete` event in `didInsertElement`, which calls the
  // `jQueryUIComplete` method.
  jQueryUIComplete: function() {
    // When the progress bar finishes, update App.controller with the
    // list of people. Because our template binds the JQ.Menu to this
    // value, it will automatically populate with the new people and
    // refresh the menu.
    App.controller.set('people', [
      Em.Object.create({
        name: "Tom DAAAAALE"
      }),
      Em.Object.create({
        name: "Yehuda Katz"
      }),
      Em.Object.create({
        name: "Selden Seen"
      })
    ]);

    // Set the `menuDisabled` property of our controller to false.
    // Because the JQ.Menu binds its `disabled` property to
    // App.controller.menuDisabled, this will enable it.
    App.controller.set('menuDisabled', false);
  }
});
