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
                    rej(err)
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
                    rej(err)
                        // console.log(JSON.stringify(err))
                })
        })
    }
    static getByEmail(url, email) {
        return new Promise(async(res, rej) => {
            const sendObject = {
                thisaction: "getByEmail",
                email: email
            }
            const sendObjectStr = JSON.stringify(sendObject)
            console.log(sendObject)
            fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: sendObjectStr
                        // "body": "{\"thisaction\":\"getByEmail\",\"email\":\"7@7.ru\"}"
                })
                .then(response => response.json())
                .then(data => {
                    res(data)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
}
export { FetchApi }