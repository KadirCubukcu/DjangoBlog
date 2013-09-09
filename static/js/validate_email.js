$(document).ready(function() {
   $('#id_email').focusout(function() {
        var sEmail = $('#id_email').val();
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if ($.trim(sEmail).length == 0) {
            document.getElementById("id_email").className = "error"
            alert('Please enter email address');
            e.preventDefault();
        }
        if (filter.test(sEmail)) {
            document.getElementById("id_email").className = "success"
        }
        else {
            document.getElementById("id_email").className = "error"
            alert('Please enter valid email address');
            e.preventDefault();
        }
    });
});

    
