define(function () {
    return function () {

            jQuery(document).ready(function(){ 
                  jQuery.ajax("http://airpark-kborykina.rhcloud.com/check_user_session.php").done( function(user){
                        document.getElementById("UserName").innerHTML = "Hello, " + user.userName + "! Look nice :)";
                       if (user.userName == 'Unknown')
                        {
                            alert("Some mistake :( Please, try to login one more time ." );
                            window.location.href = 'http://localhost/Parking/www/frontend/#/main';
                        }
                           // <!--//   jQuery("UserName").append(user.userName);-->
                        }).fail( function (user) {
                           alert("Login failed :( Please, try to login one more time ." );
                           window.location.href = 'http://localhost/Parking/www/frontend/#/main';
                           // <!--//need to make redirection!!!-->
                        });
                });

        $("#logout").click(function(){

           $.ajax({
                type: "POST",
                url: "http://airpark-kborykina.rhcloud.com/logout.php", 
                data: { 
                    action: 'logout', 
                    result: 'nothing'
                }
            }).done(function(){
                window.location.href = 'http://localhost/Parking/www/frontend/#/main';
            }).fail(function(){
                alert("hmm.. Something went wrong");
                window.location.href = 'http://localhost/Parking/www/frontend/#/main';
            });
            return false;
        });            
                        
    };
});