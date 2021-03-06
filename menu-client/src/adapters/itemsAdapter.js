// fetches from Items API
class ItemsAdapter {
    constructor() {
        this.baseURL = "https://cafe-menu-api.herokuapp.com/items"
    }

    getItems(){
        return fetch(this.baseURL)
        .then(resp => resp.json())
        .then(json => json.data)
    }

    postItems(data) {
        return fetch(this.baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .catch(err => alert(err))
    }

    // deleteItems(id) {
    //     return fetch(`${this.baseURL}/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     .then(resp => resp.json())
    // }
}

