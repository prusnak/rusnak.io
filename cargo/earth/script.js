var map = L.map('map', {
  center: [50.0755, 14.4378],
  zoom: 5
});


var myIcon = L.icon({
    iconUrl: 'marker.png',
    // shadowUrl: 'leaf-shadow.png',
    iconSize:     [16, 16],
    // shadowSize:   [0, 0],
    iconAnchor:   [8, 8],
    // shadowAnchor: [0, 0],
    popupAnchor:  [0, -8]
});

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

for (var i = 0; i < window.point_data.length; i++) {
    var point = window.point_data[i];
    var gps = [point[0], point[1]];
    var label = point[2];
    var marker = L.marker(gps, {icon: myIcon}).bindPopup(label).addTo(map);
    marker.on('mouseover', function (e) {
        this.openPopup();
    });
    marker.on('mouseout', function (e) {
        this.closePopup();
    });
}
