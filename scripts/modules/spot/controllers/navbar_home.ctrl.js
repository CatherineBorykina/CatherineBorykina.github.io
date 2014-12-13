define(function () {
    return function () {

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