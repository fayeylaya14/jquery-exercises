# jquery-exercises

**Form Validation Using Native Jquery Code**

Write a program that will create a jquery event to validate inputted text inside the form input. 

1. Build your HTML form. For me, I used bootstrap framework to format my Page properly for readability and User Experience

````
<div class="container">
        <div class="row">
            <div class="col">
                <h1>Using native JQuery Login Validation</h1>
                <form id="verify" method="POST" class="form-signin">
                    <div class="form-group">
                        <label for="fname">First Name:</label>
                        <input type="text" class="form-control" name="fname" id="fname"  placeholder="Enter First Name">
                    </div>
                    <div class="form-group">
                        <label for="lname">Last Name</label>
                        <input type="text" class="form-control" name="lname" id="lname"  placeholder="Enter Last Name">
                    </div>
                    <div class="form-group">
                        <label for="emailAd">Email address</label>
                        <input type="email" class="form-control" name="emailAd" id="emailAd" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="pword">Password</label>
                        <input type="password" class="form-control" name="pword" id="pword" placeholder="Password">
                    </div>
                        <button type="submit" value="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
 </div>
 ````
 
 2. Build your jquery function for form validation:
 
 ````
 $(document).ready(function(){
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
            var regEx =  /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
            var checkValid = regEx.test(email);

            if(!checkValid) {
                $('#emailAd').after('<span class="error"> Enter A Valid Email-Ad!</span>');
            }
        }
        if(password.length < 8) {
            $('#pword').after('<span class="error"> Password must be at least 8 characters long </span>');
        }
    });
 });
 ````
 
 **Form Validation Using JQuery Validate Plugin
 
 1. Build the html: 
 
 ````
 <div class="col">
                <h1>Using JQuery Plugin Validation</h1>
                <form id="verify_form2" method="POST" class="form-signin">
                    <div class="form-group">
                        <label for="firstname">First Name:</label>
                        <input type="text" class="form-control" name="firstname" id="firstname"  placeholder="Enter First Name">
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" class="form-control" name="lastname" id="lastname"  placeholder="Enter Last Name">
                    </div>
                    <div class="form-group">
                        <label for="emailAddress">Email address</label>
                        <input type="email" class="form-control" name="emailAddress" id="emailAddress" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                   </div>
                    <div class="form-group">
                        <label for="userpass">Password</label>
                        <input type="password" class="form-control" name="userpass" id="userpass" placeholder="Password">
                    </div>
                        <button type="submit" value="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            
  ````
  
  2. Build the Jquery COde:
  
  ````
  $('form[id="verify_form2"]').validate({
        rules: {
            firstname: "required",
            lastname: "required",
            emailAddress: {
                required: true,
                email: true,
            },
            userpass: {
                required: true,
                minlenght: 8,
            }
        },
        messages: {
            firstname: 'This field is required!',
            lname: 'This field is required!',
            emailAddress: 'Enter a valid email!',
            userpass: {
                minlenght: 'Password must be 8 characters long.'
            },
            submitHandler: function(form){
                form.submit();
            }
        }
    });
  ````
  
  
