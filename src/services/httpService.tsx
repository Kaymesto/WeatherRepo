class HttpService {

    baseurl = "http://api.openweathermap.org";
    httpHeaders = new Headers();


    async get(path: String) {
        return fetch(`${this.baseurl}/${path}`, { method: 'GET', headers: this.httpHeaders, mode: 'cors', cache: 'default' })
            .then(res => res.json())
    }

    // async post(path: String, body) {
    //     return fetch(`${this.baseurl}/${path}`, { method: "POST", body: JSON.stringify(body), headers: this.headers })
    //         .then(res => res.json())
    // }

    // async put(path : String, body) {
    //     return fetch(`${this.baseurl}/${path}`, { method: "PUT", body: JSON.stringify(body), headers: this.headers })
    //         .then(res => res.json())
    // }

    // async delete(path : String, body) {
    //     return fetch(`${this.baseurl}/${path}`, { method: "DELETE", body: JSON.stringify(body), headers: this.headers })
    //         .then(res => res.json())
    // }
}

export const httpService = Object.freeze(new HttpService());

export const tokenAPI = "f44e947afc6c0878ed4463a841db0599";
