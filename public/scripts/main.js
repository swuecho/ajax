require.config({
  paths: {
    "jquery": "jquery-2.1.0",
    "underscore": "underscore-1.6.0",
    "backbone": "backbone-1.1.2",
  },
/* todo learn shim config
  shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
    }
*/
});

require(['jquery', 'underscore', 'backbone'], function ($,_, Backbone) {

$(document).ready(function(){
    
  // **ListView class**: Our main app view.
  var ListView = Backbone.View.extend({
    el: $('body'), // attaches `this.el` to an existing element.
    // `initialize()`: Automatically called upon instantiation. Where you make all types of bindings, _excluding_ UI events, such as clicks, etc.
    events: {
      'click button#add': 'addItem'
    },
    initialize: function(){
      _.bindAll(this, 'render', 'addItem'); // every function that uses 'this' as the current object should be in here

      this.counter = 0; // total number of items added thus far
      this.render();
    },
      render: function(){
      $(this.el).append("<button id='add'>Add list item</button>");
      $(this.el).append("<ul></ul>");
    },
      
      addItem: function(){
      this.counter++;
      $('ul', this.el).append("<li>hello world"+this.counter+"</li>");
    }
  });


  // **listView instance**: Instantiate main app view.
  var listView = new ListView();

});

});
