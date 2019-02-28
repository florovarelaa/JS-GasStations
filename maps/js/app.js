const api = new Api().getApi();
const map = new Map();
let mapData = {};
init(api);

function init(api) {
    addEventListeners();
    api.then( response => {
        mapData = response.results;
        mapData.forEach( e => {
            const { latitude, longitude, calle, regular, premium } = e;
            map.addMarker(latitude, longitude, calle, regular, premium);
        })
    })
}


function addEventListeners() {
    document.getElementById("search").addEventListener("keypress", () => {
        map.markers.clearLayers();
        filtro = mapData.filter( key => {
            search = document.getElementById("search").value;
            key.calle.indexOf(search) !== -1;
            console.log(key.calle.indexOf(search));
        })
        .forEach( e => {
            
            const { latitude, longitude, calle, regular, premium } = e;
            map.addMarker(latitude, longitude, calle, regular, premium);
        });
    });
}
