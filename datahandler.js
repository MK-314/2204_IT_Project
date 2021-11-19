class FetchApi {
    static getAll(url) {
        return new Promise(async(res, rej) => {
            fetch(url, {
                    method: 'GET',
                    headers: {}
                })
                .then(response => response.json())
                .then(data => {
                    res(data)
                        // console.log(JSON.stringify(data))
                })
                .catch(err => {
                    // console.log(JSON.stringify(err))
                })
        })
    }
    static post(url, thisObject) {
        return new Promise(async(res, rej) => {
            fetch(url, {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify(thisObject)
                })
                .then(response => response.json())
                .then(data => {
                    res(data)
                        // console.log(JSON.stringify(data))
                })
                .catch(err => {
                    // console.log(JSON.stringify(err))
                })
        })
    }
}
export { FetchApi }