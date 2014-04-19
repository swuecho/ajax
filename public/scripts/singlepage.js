define({

    initFullFormAjaxUpload: function() {

        // Once the FormData instance is ready and we know
        // where to send the data, the code is the same
        // for both variants of this technique
        function sendXHRequest(formData, uri) {
            var xhr = new XMLHttpRequest();

            // Set up events
            xhr.addEventListener('readystatechange', onreadystatechangeHandler, false);

            // Set up request
            xhr.open('POST', uri, true);

            xhr.send(formData);
        }


        // Handle the response from the server
        function onreadystatechangeHandler(evt) {
            var status = null;

            try {
                status = evt.target.status;
            } catch (e) {
                return;
            }

            if (status == '200' && evt.target.readyState == 4 && evt.target.responseText) {
            console.log(evt.target);
var new_body = '<p>The server saw it as:</p><pre>' + evt.target.responseText + '</pre>';
document.open();
document.write(new_body);
document.close();

                
            }
        }


        var form = document.forms[0];

        form.onsubmit = function() {
            // FormData receives the whole form
            var formData = new FormData(form);

            // We send the data where the form wanted
            var action = form.getAttribute('action');

            // Code common to both variants
            sendXHRequest(formData, action);

            // Avoid normal form submission
            return false;
        }
    },

});
