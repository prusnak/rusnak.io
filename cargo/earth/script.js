var map = L.map('map', {
  center: [50.0755, 14.4378],
  zoom: 5
});

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

for (var i = 0; i < window.point_data.length; i++) {
    var point = window.point_data[i];
    var gps = [point[0], point[1]];
    var label = point[2];
    L.marker(gps).bindPopup(label).addTo(map);
}
