require.config({
  paths: {
    "jquery": "jquery-2.1.0",
    "underscore": "underscore-1.6.0",
  }
});

require(['jquery', 'underscore','app'], function ($,_, app) {

$(document).ready(function(){
    app.doinit();
});
    

});
