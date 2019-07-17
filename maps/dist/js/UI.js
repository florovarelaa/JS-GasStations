class Map {
    constructor() {
        this.map = L.map('map', {
            center: [51.505, -0.09],
            zoom: 13
        });
        this.init();
        this.markers = new L.LayerGroup();
    }

    //initializes map
    init() {
        const map = this.map.setView([23.6260333, -102.5375005], 5);
        
        const mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors',
            maxZoom: 18,
            }).addTo(map);
    }

    addMarker(lat, long, calle, regular, premium) {

        //marker
        const marker = new L.marker([parseFloat(lat), parseFloat(long)]);

        //bind popup to marker
        marker.bindPopup( 
                        `<h4> Calle: ${calle} <h3>
                        <p>Regular: ${regular}</p>
                         <p>Premium: ${premium}</p>`
        )
        .openPopup();

        marker.addTo(this.map);
        this.markers.addLayer(marker);
        this.markers.addTo(this.map);
    }
}