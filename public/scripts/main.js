require.config({
  paths: {
    "jquery": "jquery-2.1.0",
    "underscore": "underscore-1.6.0",
  }
});


require(['jquery'], function ($) {

function dodo () {
    console.log("load");
      /* get values of text fields */
      var dt = $('#definition').val();
      var dd = $('#explaintaion').val();
      var resultstr = "<dl><dt>" + dt + "</dt><dd>" + dd + "</dd></dl>";
     $("#samplecode").val(resultstr);
     $("#preview").html(resultstr);
}

});


