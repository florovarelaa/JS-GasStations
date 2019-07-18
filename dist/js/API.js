class Api {
    async getApi() {
        let response = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');
        let responseJSON = await response.json();
        return (
            responseJSON
        )
    }
}

