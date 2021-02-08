$(document).ready(function () {
    $('#about-more-btn').click(function () {
        $('#about-more').collapse('toggle');
    });
});

function initMap() {
    
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 51.4895, lng: 0.0676 }
    });

    let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let locations = [
        { lat: 51.49016, lng: 0.06769 },
        { lat: 51.49121, lng: 0.06722 },
        { lat: 51.49126, lng: 0.06925 },
        { lat: 51.48920, lng: 0.06409 },
        { lat: 51.49512, lng: 0.06237 },
        { lat: 51.49211, lng: 0.06984 },
        { lat: 51.49386, lng: 0.07042 },
        { lat: 51.49481, lng: 0.07075 },
        { lat: 51.49479, lng: 0.06680 },
        { lat: 51.49522, lng: 0.07077 },
        { lat: 51.49478, lng: 0.03681 },
        { lat: 51.48415, lng: 0.05962 },
        { lat: 51.47087, lng: 0.05537 },
        { lat: 51.50214, lng: 0.09040 },
        { lat: 51.49912, lng: 0.06285 },
        { lat: 51.49452, lng: 0.05333 },
        { lat: 51.49933, lng: 0.06686 },
        { lat: 51.47945, lng: 0.05722 },
    ]

    let markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });

    new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });

    google.maps.event.addDomListener(markers[0], 'click', function(){
        $('#marker-a').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[1], 'click', function(){
        $('#marker-b').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[2], 'click', function(){
        $('#marker-c').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[3], 'click', function(){
        $('#marker-d').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[4], 'click', function(){
        $('#marker-e').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[5], 'click', function(){
        $('#marker-f').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[6], 'click', function(){
        $('#marker-g').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[7], 'click', function(){
        $('#marker-h').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[8], 'click', function(){
        $('#marker-i').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[9], 'click', function(){
        $('#marker-j').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[10], 'click', function(){
        $('#marker-k').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[11], 'click', function(){
        $('#marker-l').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[12], 'click', function(){
        $('#marker-m').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[13], 'click', function(){
        $('#marker-n').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[14], 'click', function(){
        $('#marker-o').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[15], 'click', function(){
        $('#marker-p').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[16], 'click', function(){
        $('#marker-q').collapse('toggle');
    });
    google.maps.event.addDomListener(markers[17], 'click', function(){
        $('#marker-r').collapse('toggle');
    });


    let map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 15,
        center: { lat: 51.4895, lng: 0.0676 }
    });

    let cycleRoute1 = {
        origin: (51.49211, 0.06984),
        destination: (51.48920, 0.06409),
        travelMode: 'BICYCLING',
        waypoints: [
            {location:(51.49677769274721, 0.07996249750554754)},
            {location:(51.49443986744011, 0.0641696507260815)},
            {location:(51.49048532990516, 0.0676028783412546)},
        ]
    }
    
    let cycleRoute2 = {
        origin: (51.48415,0.05962),
        destination: (51.49512, 0.06237),
        travelMode: 'BICYCLING',
        waypoints: [
            {location:(51.475773042516266, 0.04932094161333614)},
            {location: (51.48244159742304, 0.061616187795665835)},
            {location: (51.48261531433449, 0.06989884916912183)},
            {location: (51.490231479694536, 0.06740975920483405)},
        ]
    }

    let cycleRoute3 = {
        origin: (51.50214,0.09040),
        destination: (51.50507266530035, 0.0020926051645160666),
        travelMode: 'BICYCLING',
        waypoints: [
            {location:(51.49552196173946, 0.07313895758981225)},
            {location: (51.49449330503574, 0.06386924317185441)},
            {location: (51.49470705378307, 0.05024362144822428)},
            {location: (51.49381197414034, 0.02977300222936679)},
            {location: (51.49537501222901, 0.016597991554003634)}
        ]
    }

    let cycleRoute4 = {
        origin: (51.49512, 0.06237),
        destination: (51.48277566803277, -0.009773487528947194),
        travelMode: 'BICYCLING',
        waypoints: [
            {location:(51.500544679492904, 0.05397725640325461)},
            {location: (51.50014395117104, 0.0347511821603263)},
            {location: (51.5083715347189, 0.012349372343986907)},
            {location: (51.50433806731772, -0.017004723110570403)},
            {location: (51.48993754652197, -0.013485664849658395)}
        ]
    }
}


