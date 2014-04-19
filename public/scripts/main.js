require.config({
  paths: {
    "jquery": "jquery-2.1.0",
  }
});

require(['jquery', 'singlepage'], function ($,sp) {

$(document).ready(function(){
    sp.initFullFormAjaxUpload();
});
    

});
