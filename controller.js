$(document).ready(function(){

    /*Native JQuery*/
    $('#verify').submit(function(e){
        e.preventDefault();

        var firstname = $('#fname').val();
        var lastname = $('#lname').val();
        var email = $('#emailAd').val();
        var password = $('#pword').val();

        $('.error').remove();

        if(firstname.length < 1) {
            $('#fname').after('<span class="error"> This field is required!</span>');
        }
        if(lastname.length < 1) {
            $('#lname').after('<span class="error"> This field is required!</span>');
        }
        if(email.length < 1) {
            $('#emailAd').after('<span class="error"> This field is required!</span>');
        } else {
            var regEx =  /^[A-Za-z0-9][A-Za-z0-9._%+-]{0,63}@(?:[A-Za-z0-9]{1,63}\.){1,125}[A-Za-z]{2,63}$/
            var checkValid = regEx.test(email);

            if(!checkValid) {
                $('#emailAd').after('<span class="error"> Enter A Valid Email-Ad!</span>');
            }
        }
        if(password.length < 8) {
            $('#pword').after('<span class="error"> Password must be at least 8 characters long </span>');
        }
    });

    /*Using Jquery Validation Plugin*/
    // $('form[id="verify_form2"]').validate({
    //     rules: {
    //         firstname: "required",
    //         lastname: "required",
    //         emailAddress: {
    //             required: true,
    //             email: true,
    //         },
    //         userpass: {
    //             required: true,
    //             minlenght: 8,
    //         }
    //     },
    //     messages: {
    //         firstname: 'This field is required!',
    //         lname: 'This field is required!',
    //         emailAddress: 'Enter a valid email!',
    //         userpass: {
    //             minlenght: 'Password must be 8 characters long.'
    //         },
    //         submitHandler: function(form){
    //             form.submit();
    //         }
    //     }
    // });

    /*Navbar dropdown toggle*/
    $(".d-btn i").click(function(){
        $(this).toggleClass("fa-times");
        $('#navmobile').slideToggle();
    });
});
