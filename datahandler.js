class FetchApi {
    static getAllUsers() {
        return new Promise(async(res, rej) => {
            fetch('https://recipe-ruby-api.herokuapp.com/api/users', {
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
    static createUser(thisObject) {
        return new Promise(async(res, rej) => {
            fetch('https://recipe-ruby-api.herokuapp.com/api/users', {
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
    static getUserByEmail(email) {
        return new Promise(async(res, rej) => {
            fetch('https://recipe-ruby-api.herokuapp.com/api/users' +
                    "?thisaction=getByEmail&email=" + email, {
                        method: "GET",
                        headers: {},
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