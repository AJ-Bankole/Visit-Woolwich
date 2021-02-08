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

    

    
}


