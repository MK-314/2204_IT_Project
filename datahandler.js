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
                })
                .catch(err => {
                    rej(err)
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
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static getUserByEmail(email) {
            console.log(email + " in feeetch")
            return new Promise(async(res, rej) => {
                console.log(email + " in feeetch")
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
        // POSTS
    static createPost(postObject) {
        return new Promise(async(res, rej) => {
            fetch("https://recipe-ruby-api.herokuapp.com/api/posts", {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify(postObject)
                })
                .then(response => {
                    res(response);
                })
                .catch(err => {
                    console.error(err);
                });
        })
    }
    static getPostByUserId(user_id) {
        return new Promise(async(res, rej) => {
            fetch('https://recipe-ruby-api.herokuapp.com/api/posts' +
                    '?thisaction=getByUserId&user_id=' + user_id, {
                        "method": "GET",
                        "headers": {}
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