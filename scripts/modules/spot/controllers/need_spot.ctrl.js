define(function () {
    return function () {

        var myMap;
        var marker;
        var contentString = 'Your spot is here!';
        var infowindow;
        jQuery(document).ready(function () {
            var mapCenter = new google.maps.LatLng(43.4304343, -80.4763151, 12); //Google map Coordinates - initial is the Kitchener city

                map_initialize(); // load map
            function map_initialize() {
                //Google map option
                var googleMapOptions = {
                    center: mapCenter, // map center
                    zoom: 12, //zoom level, 0 = earth view to higher value
                    panControl: true, //enable pan Control
                    zoomControl: true, //enable zoom control
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL //zoom control size
                    },
                    scaleControl: true, // enable scale control
                    mapTypeId: google.maps.MapTypeId.ROADMAP // google map type
                };
                myMap = new google.maps.Map(document.getElementById("google_map"), googleMapOptions);
            }
           
        });                      
                        
    };
});