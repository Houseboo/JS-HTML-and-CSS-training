var map = L.map( 'map', {
	center: [65.0, 15.0],
	minZoom: 4,
	zoom: 2
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiaG91c2Vib28iLCJhIjoiY2puNGMyc2VtNWNuNDN2bnhiZmE4cmdvZyJ9.f2c3DXzhxAbaHKHfk06c5A'
}).addTo( map );

var polygon = L.polygon([
	[65.0, 15.0],
	[66.0, 15.0],
	[65.0, 16.0]
]).addTo(map);

var selectBtnPressed = false;
var popup = L.popup();

	function onMapClick(e) {
		if (selectBtnPressed) {
			popup
				.setLatLng(e.latlng)
				.setContent("You clicked the map at " + e.latlng.toString())
				.openOn(map);
		}
	}

	map.on('click', onMapClick);

function selectBtnPress() {
	selectBtnPressed = true;
}

function confirmBtnPress() {
	selectBtnPressed = false;
}
