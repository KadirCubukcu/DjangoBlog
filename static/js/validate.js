$(document).ready(function(){
 $("#id_new_password1,#id_new_password2,#id_password,#id_password_again").keyup(function()
{
        //alert($(this).val());
        var password=jQuery("#id_new_password1,#id_password").val();
        var password2=jQuery("#id_new_password2,#id_password_again").val();
        var desc = new Array();
        desc[0] = "Very Weak";
        desc[1] = "Weak";
        desc[2] = "Better";
        desc[3] = "Medium";
        desc[4] = "Strong";
        desc[5] = "Strongest";
        var score   = 0;
        var pass_str =new Array();
        pass_str[0] = "Least 6 characters"
        pass_str[1] = " Has lower and uppercase characters"
        pass_str[2] = " At least one number"
        pass_str[3] = " At least one special character"
        pass_str[4] = " Password length greater than 12"
        document.getElementById("pass_advice").innerHTML = pass_str;
        //if password bigger than 6 give 1 point
        if (password.length > 6){
        score++;
        while (pass_str.indexOf("Least 6 characters") !== -1) {
            pass_str.splice(pass_str.indexOf("Least 6 characters"), 1);
            }
        document.getElementById("pass_advice").innerHTML = pass_str;
        }

        //if password has both lower and uppercase characters give 1 point      
        if ( ( password.match(/[a-z]/) ) && ( password.match(/[A-Z]/) ) ){
        score++;
        while (pass_str.indexOf(" Has lower and uppercase characters") !== -1) {
            pass_str.splice(pass_str.indexOf(" Has lower and uppercase characters"), 1);
            }
        document.getElementById("pass_advice").innerHTML = pass_str;
        }

        //if password has at least one number give 1 point
        if (password.match(/\d+/)){
        score++;
        while (pass_str.indexOf(" At least one number") !== -1) {
            pass_str.splice(pass_str.indexOf(" At least one number"), 1);
            }
        document.getElementById("pass_advice").innerHTML = pass_str;
        }

        //if password has at least one special caracther give 1 point
        if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) ){
        score++;
        while (pass_str.indexOf(" At least one special character") !== -1) {
            pass_str.splice(pass_str.indexOf(" At least one special character"), 1);
            }
        document.getElementById("pass_advice").innerHTML = pass_str;
        }

        //if password bigger than 12 give another 1 point
        if (password.length > 12){
        score++;
        while (pass_str.indexOf(" Password length greater than 12") !== -1) {
            pass_str.splice(pass_str.indexOf(" Password length greater than 12"), 1);
            }
        document.getElementById("pass_advice").innerHTML = pass_str;
        }


        document.getElementById("passwordDescription").innerHTML = desc[score];
        document.getElementById("passwordStrength").className = "strength" + score;
        if (password.length < 6){
            document.getElementById("passwordsame").innerHTML = "Minimum 6 Characters"
            document.getElementById("passwordsame").className = "pass_error"
            document.getElementById("id_new_password1").className = "error"
        }else if (password==password2){
            document.getElementById("passwordsame").innerHTML = "Password OK"
            document.getElementById("passwordsame").className = "pass_success"
            document.getElementById("id_new_password1").className = "success"
            document.getElementById("id_new_password2").className = "success"
        }else{
            document.getElementById("passwordsame").innerHTML = "Passwords are not Same!!"
            document.getElementById("passwordsame").className = "pass_error"
            document.getElementById("id_new_password1").className = "error"
            document.getElementById("id_new_password2").className = "error"
        }
        
});})
